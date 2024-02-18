import { genFakeData } from "./fakeData.js";

const contacts = document.querySelector(".contacts");

contacts.innerHTML = genFakeData()
	.map((contact) => {
		return `<li>
            <div class="title">
                <p class="name">${contact.name}</p>
                <div class="date">${contact.date}</div>
            </div>

            <div class="messageInfo">
                <p class="message">${contact.message}</p>
                <div class="count">${contact.unreadMessages}</div>
            </div>
        </li>
        <div class="underline"></div>`;
	})
	.join(" ");

const messages = document.querySelector(".messages");

messages.innerHTML = genFakeData()
	.map((message) => {
		return `<li class="${message.author ? "me" : "notMe"}">
            <p class="text">${message.message}</p>
            <p class="date">${message.date}</p>
        </li>`;
	})
	.join(" ");
