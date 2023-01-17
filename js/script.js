const Socials = Config.socials;

if (Socials.discord.active) {
    const discordLink = document.querySelector(".social.discord");
    discordLink.addEventListener("click", () => window.invokeNative('openUrl', Socials.discord.link));
}

if (Socials.youtube.active) {
    const youtubeLink = document.querySelector(".social.youtube");
    youtubeLink.addEventListener("click", () => window.invokeNative('openUrl', Socials.discord.link));
}

if (Socials.tiktok.active) {
    const tiktokLink = document.querySelector(".social.tiktok");
    tiktokLink.addEventListener("click", () => window.invokeNative('openUrl', Socials.discord.link));
}

// Text tips change
var numberTip = 0;
const changeTips = document.getElementById("tipChange");
setInterval(() => {
    if (numberTip + 1 >= Config.Tips.length) numberTip = 0;
    changeTips.innerText = Config.Tips[numberTip];
    numberTip++;
}, 10 * 1000);

// Custom Cursor for fivem
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute("style","top:" +e.pageY + "px; left:" +e.pageX+ "px;");
});