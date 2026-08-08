// js guide from Petrapixel on neocities
// initLayout() is called once the DOM (the HTML content) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
    // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
    if (!document.body.classList.contains("no-layout")) {
        // Inserting header and footer:
        document.body.insertAdjacentHTML("afterbegin", headerEl);
        document.body.insertAdjacentHTML("beforeend", footerEl);

        // Inserting sidebars:
        const wrapperElement = document.querySelector("main");
        if (wrapperElement) {
            wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
        }

        initActiveLinks();
    }

});

/*  F U N C T I O N S */

function initActiveLinks() {
    // This function adds the class "active" to any link that links to the current page.
    // This is helpful for styling the active menu item.

    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el
            .getAttribute("href")
            .replace(".html", "")
            .replace("/public", "");

        if (pathname == "/") {
            // homepage
            if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
        } else {
            // other pages
            if (window.location.href.includes(elHref)) el.classList.add("active");
        }
    });
}

function getNestingString() {
    const currentUrl = window.location.href
        .replace("http://", "")
        .replace("https://", "")
        .replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes == 1) return ".";
    if (numberOfSlahes == 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* H T M L*/

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
         <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

const headerEl = `
    <div id="topbar" style="text-align: center;" class="sticky">mwah</div>
            <header id="marquee" style="margin-bottom: 0px;">
                <ul>
                    <marquee direction="right">
                        <img src="blinkies/pinkgirl.jpg" width="150px" height="45px"> <!--clochette-soft.jp-->
                        <img src="blinkies/rin.jpg" width="80px" height="45px"> <!--ruri!!1! :3 on Tumblr-->
                        <img src="blinkies/needygirl.gif" width="80px" height="45px">
                        <!--✰﹕lavender or lilay !! on Tumblr-->
                        <img src="blinkies/idol.jpg" width="150px" height="45px">
                        <img src="blinkies/city.jpg" width="150px" height="45px">
                        <img src="blinkies/sonicobeach.gif" width="80px" height="45px"> <!--ruri!!1! :3 on Tumblr-->
                        <img src="blinkies/k-on!movie.jpg" width="150px" height="45px">
                        <img src="blinkies/hotpink.jpg" width="80px" height="45px"> <!--clochette-soft.jp-->
                        <img src="blinkies/staykawaii.gif" width="80px" height="45px">
                        <img src="blinkies/maidragon03.jpg" width="150px" height="45px">
                        <img src="blinkies/strawberrymiku.jpg" width="150px" height="45px">
                        <img src="blinkies/violet.jpg" width="150px" height="45px">
                        <img src="blinkies/sonico.gif" width="80px" height="45px"> <!--ruri!!1! :3 on Tumblr-->
                        <img src="blinkies/tsumugiheart.png" width="150px" height="45px">
                        <img src="blinkies/nichijou.png" width="150px" height="45px">
                        <img src="blinkies/tetodance.gif" width="80px" height="45px"> <!--ruri!!1! :3 on Tumblr-->
                        <img src="blinkies/mikufigurine.jpg" width="150px" height="45px">
                        <img src="blinkies/bnimg.gif" width="150px" height="45px"> <!--chezimu.neocities.org-->
                        <img src="blinkies/cutebun.jpg" width="150px" height="45px">
                        <img src="blinkies/madoka.gif" width="80px" height="45px"> <!--PuniPlush on devianart-->
                        <img src="blinkies/animaru.jpg" width="150px" height="45px">
                        <img src="blinkies/shocku.jpg" width="150px" height="45px"> <!--clochette-soft.jp-->
                    </marquee>
                </ul> 
            </header>
        <div id="header" style="height: 400px;"></div>
        <nav id="navbar" style="margin-bottom: 10px; margin-top: 5px;">
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="#about">me me me</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">make a connection</a></li>
                </ul>
        </nav>
`;

const sidebarEl1 = `
            <aside>
                <div class="statusbox" style="margin-bottom: 10px;">
                    <h2>MENU</h2>
                    <img src="https://dl.glitter-graphics.com/pub/223/223979qnh6dwmabq.gif" style="width: 175px; height: 25px">
                    <a href="guestbook.html">sign my guestbook</a>
                    <ul style="padding-left:20px;">
                        <li>This is where I'll put my guestbook, blinkies, etc</li>
                    </ul>
                </div>
                <div class="updatesbox" style="margin-bottom: 10px;">
                    <h2>UPDATES</h2>
                    <p>planning on adding a scrollbar, making the nav more interesting, etc</p>
                </div>
                <div id="projects" class="box" style="margin-bottom: 10px;">
                        <h2>PROJECTS</h2>
                        <li><a href="https://github.com/ccceno/moebeamahundredwebsite">This website</a></li>
                        <li><a href="https://github.com/waterprisem/ant_game">Previous hackathon game</a></li>
                </div>
            </aside>
`;

const footerEl = `
        <footer id="footer" style="margin-top: 10px;">
            <p>© 2026 cenozone</p>
        </footer>
`;