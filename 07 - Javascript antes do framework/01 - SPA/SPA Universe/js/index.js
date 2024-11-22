import router from "./spa.js";

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explorer", "/pages/explore.html")

router.handle()

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        router.route(event)
    })
})
