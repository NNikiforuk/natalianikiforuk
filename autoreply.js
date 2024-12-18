import "dotenv/config";
import nodemailer from "nodemailer";
import Imap from "node-imap";
import { simpleParser } from "mailparser";

const config = {
	user: process.env.EMAIL_USER,
	password: process.env.EMAIL_PASSWORD,
	host: process.env.EMAIL_HOST,
};

// Create email sender
const transporter = nodemailer.createTransport({
	host: config.host,
	port: 587,
	secure: false,
	auth: {
		user: config.user,
		password: config.password,
	},
});

// Set up email receiver
const imap = new Imap({
	user: config.user,
	password: config.password,
	host: config.host,
	port: 993,
	tls: true,
});

// Keep track of emails we've replied to
const repliedTo = new Set();

// Watch for new emails
imap.once("ready", () => {
	imap.openBox("INBOX", false, (err) => {
		if (err) throw err;

		// Listen for new emails
		imap.on("mail", () => {
			const fetch = imap.seq.fetch("*", {
				bodies: ["HEADER.FIELDS (FROM)"],
			});

			fetch.on("message", (msg) => {
				msg.on("body", (stream) => {
					simpleParser(stream, async (err, parsed) => {
						if (err) return;

						const senderEmail = parsed.from.value[0].address;

						// Don't send multiple replies to the same address
						if (repliedTo.has(senderEmail)) return;

						// Send auto-reply
						try {
							await transporter.sendMail({
								from: config.user,
								to: senderEmail,
								subject: "Dziękujemy za wiadomość",
								text: "Witaj! Dziękujemy za wiadomość. Odezwiemy się w ciągu 24h.",
							});

							repliedTo.add(senderEmail);
							console.log(`Sent auto-reply to ${senderEmail}`);
						} catch (error) {
							console.error("Error sending:", error);
						}
					});
				});
			});
		});
	});
});

imap.once("error", (err) => {
	console.error("Connection error:", err);
});

imap.connect();
