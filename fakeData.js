export function genFakeData() {
	return Array.from({ length: 25 }, (_, i) => {
		return {
			name: lorem.split(" ")[parseInt(Math.random() * 20)].toUpperCase(),
			date: `${parseInt(Math.random() * 12)}:${parseInt(
				10 + Math.random() * 50
			)}`,
			unreadMessages: Math.ceil(Math.random() * 20),
			author: parseInt(Math.random() * 2),
			message: lorem
				.split(" ")
				.slice(parseInt(Math.random() * 20))
				.join(" "),
		};
	});
}

const lorem =
	"lorem ipsum dolor sit amet consectetur adipisicing elit numquam non recusandae doloribus sed consequatur dolorem quia animi cupiditate nam ipsa";
