/*/
 *####################################################################################################
 * HomeObserver v3
 * 
 * Author: Genbu Hase
 * Last Updated: 2018/03/14
 * 
 * Details:
 * このプラグインは投稿の読み上げ機能を追加します。
 *####################################################################################################
/*/
class Speecher {
	constructor () {}

	/**
	 * 声質取得
	 * 
	 * @param {String} name 声質の名前
	 * @returns {SpeechSynthesisVoice}
	 */
	static getVoice (name = "") {
		let voices = speechSynthesis.getVoices(),
			result = voices[0];

			voices.forEach(voice => {
				if (voice.name == name) result = voice;
			});

		return result;
	}

	/**
	 * 発声開始
	 * 
	 * @param {Number} [speed = 1] 読み上げ速度
	 * @param {Number} [pitch = 1] 読み上げ音程
	 * @param {Number} [volume = 1] 読み上げ音量
	 * @param {String} [text = ""] 読み上げテキスト
	 * @param {SpeechSynthesisVoice} [type = new SpeechSynthesisVoice()] 読み上げ声質
	 */
	speak (speed = 1, pitch = 1, volume = 1, text = "", type = Speecher.getVoice("")) {
		let ctx = new SpeechSynthesisUtterance();
			ctx.rate = speed,
			ctx.pitch = pitch,
			ctx.volume = volume,
			ctx.text = text,
			ctx.voice = type;

		speechSynthesis.speak(ctx);
	}
}



let speaker = new TextSpeaker();

window.addEventListener("DOMContentLoaded", () => {
	document.querySelector('Div[Role="feed"]').addEventListener("DOMNodeInserted", (event) => {
		let post = event.target;

		if (post.nodeName === "ARTICLE" && post.parentNode.nodeName !== "HEAD") {
			let content = post.querySelector("Div.status__content");
			let text = "";
			
			if (content.classList.contains("status__content--with-spoiler")) {
				text = `${post.querySelector("Strong.display-name__html").innerText}さん ${content.querySelector("P > Span").innerText} ${content.querySelector("Div.status__content__text").innerText}`;
			} else {
				text = `${post.querySelector("Strong.display-name__html").innerText}さん ${content.innerText}`;
			}

			speaker.speak(1, 1, 1, text, TextSpeaker.getVoice("Google 日本語"));
		}
	});
});