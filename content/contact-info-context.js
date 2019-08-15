
let contactInfoContent = {
	title: "Contact",
	
	header: {
		title: "",
		paragraphs: [
			"Mauris at accumsan arcu, vel ultrices mauris"
		],
		button: {
			text: BUTTON_OPEN_TEXT
		},
		image: {
			source: "contact1600x900.jpg"
		}
	},
	
	main: {
		title: "",
		paragraphs: [
			"Etiam quis libero nec tellus maximus ultrices sagittis eu risus. Etiam ac arcu eget velit finibus ultrices sed et odio. Suspendisse potenti. Nam sodales ex at lectus tempus iaculis."
		],
		image: {
			source: "contact1600x900.jpg"
		},
		button: {
			text: BUTTON_CLOSE_TEXT
		},
	
		contactInfoItems: [
			{
				title: "Адрес",
				text: [
					"Може да ни намерите всеки делничен ден от 8:00 сутринта до 6:00 вечерта на адрес"
				],
				values: ADDRESS.ENTRIES,
				classValue: ADDRESS.CLASS
			},
			
			{ 
				title: "Телефон",
				text: [
					"Ако искате да Ви дадем повече информация за нас или за някоя от нашите услуги, позвънете ни на"
				],
				values: PHONE.ENTRIES,
				classValue: PHONE.CLASS
			},
			
			{
				title: "Електронна поща",
				text: [
					"Ако все още не сте напълно сигурни или имате прекалено много въпроси към нас, задайте ги на"
				],
				values: EMAIL.ENTRIES,
				classValue: EMAIL.CLASS
			}
		]
	}
	
};

















