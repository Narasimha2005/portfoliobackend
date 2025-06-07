const express = require('express')
const path = require('path')
const { v4 } = require('uuid')
const { open } = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

const projects =
    [
        {
            id: v4(),
            name: "Nxt Trendz",
            image_url: "https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719657/Screenshot_263_f28kqw.png",
            link: "https://simhanxttrendz.ccbp.tech/",
            category: "React",
            date: "2025-01-01",
            priority: 1
        },
        {
            id: v4(),
            name: "Nxt Watch",
            image_url: "https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719727/Screenshot_264_z9tso7.png",
            link: "https://simhanxtwatch.ccbp.tech/login",
            category: "React",
            date: "2024-12-20",
            priority: 1
        },
        {
            id: v4(),
            name: "VR Website",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/vr-website-img.png",
            link: "https://narasimhavr.ccbp.tech/",
            category: "HTML & CSS",
            date: "2023-02-01",
            priority: 2
        },
        {
            id: v4(),
            name: "Food Munch",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png",
            link: "https://simhafood123.ccbp.tech/",
            category: "HTML & CSS",
            date: "2023-01-10",
            priority: 2
        },
        {
            id: v4(),
            name: "Speed Type Test",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/speed-type-test-img.png",
            link: "https://simhatypingtest.ccbp.tech/",
            category: "React",
            date: "2024-01-01",
            priority: 2
        },
        {
            id: v4(),
            name: "Book Search",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/book-search-img.png",
            link: "https://simhabookstore.ccbp.tech/",
            category: "JS",
            date: "2024-06-01",
            priority: 3
        },
        {
            id: v4(),
            name: "Blog List",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png",
            link: "https://simhablogslist.ccbp.tech/",
            category: "React",
            date: "2024-07-01",
            priority: 4
        },
        {
            id: v4(),
            name: "Emoji Game",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png",
            link: "https://simhaegame.ccbp.tech/",
            category: "React",
            date: "2024-07-12",
            priority: 2
        },
        {
            id: v4(),
            name: "Appointments App",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png",
            link: "https://simhaappoint.ccbp.tech/",
            category: "React",
            date: "2024-05-12",
            priority: 2
        },
        {
            id: v4(),
            name: "Meme Generator",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/meme-generator-img.png",
            link: "https://simhac44.ccbp.tech/",
            category: "React",
            date: "2024-05-06",
            priority: 4
        },
        {
            id: v4(),
            name: "Gradient Generator",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhagradient.ccbp.tech/",
            category: "React",
            date: "2024-07-08",
            priority: 4
        },
        {
            id: v4(),
            name: "Password Manager",
            image_url: "https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719803/Screenshot_265_vypmix.png",
            link: "https://simhapm.ccbp.tech/",
            category: "React",
            date: "2024-12-12",
            priority: 3
        },
        {
            id: v4(),
            name: "CryptoCurrency Tracker",
            image_url: "https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719869/Screenshot_266_m8hyxk.png",
            link: "https://simhactracker.ccbp.tech/",
            category: "React",
            date: "2024-12-20",
            priority: 2
        },
        {
            id: v4(),
            name: "Match Game",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simahmatchg.ccbp.tech/",
            category: "React",
            date: "2024-12-20",
            priority: 2
        },
        {
            id: v4(),
            name: "IPL Dashboard",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhaipldashb2.ccbp.tech/",
            category: "React",
            date: "2024-12-18",
            priority: 2
        },
        {
            id: v4(),
            name: "Amazon Prime",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhapvideo.ccbp.tech/",
            category: "React",
            date: "2024-06-04",
            priority: 4
        },
        {
            id: v4(),
            name: "ROCK Paper Scissors",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simharocpapsci.ccbp.tech/",
            category: "React",
            date: "2024-12-16",
            priority: 2
        },
        {
            id: v4(),
            name: "Todo List",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhatodolist.ccbp.tech/",
            category: "JS",
            date: "2023-10-29",
            priority: 2
        },
        {
            id: v4(),
            name: "Task Manager",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhamock1bc.ccbp.tech/",
            category: "React",
            date: "2024-12-11",
            priority: 2
        },
        {
            id: v4(),
            name: "Money Manager",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhamoneym.ccbp.tech/",
            category: "React",
            date: "2024-11-11",
            priority: 3
        },
        {
            id: v4(),
            name: "Stop Watch",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhac25a.ccbp.tech/",
            category: "React",
            date: "2024-10-10",
            priority: 4
        },
        {
            id: v4(),
            name: "Digital Clock",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhahooksclock.ccbp.tech/",
            category: "React",
            date: "2024-09-02",
            priority: 4
        },
        {
            id: v4(),
            name: "Notes App",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhahooksnotes.ccbp.tech/",
            category: "React",
            date: "2024-11-01",
            priority: 4
        },
        {
            id: v4(),
            name: "My CCBP Journey",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://simhajourney.ccbp.tech/",
            category: "React",
            date: "2024-12-31",
            priority: 3
        },
        {
            id: v4(),
            name: "Elite Spaces",
            image_url: "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            link: "https://elitespaces.ccbp.tech/",
            category: "HTML & CSS",
            date: "2023-10-29",
            priority: 4
        }
    ]
const myquery = `INSERT INTO Projects (id, name, image_url, link, category, date, priority) VALUES
	('${v4()}', 'Nxt Trendz', 'https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719657/Screenshot_263_f28kqw.png', 'https://simhanxttrendz.ccbp.tech/', 'React', '2025-01-01', '1'),
	('${v4()}', 'Nxt Watch', 'https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719727/Screenshot_264_z9tso7.png', 'https://simhanxtwatch.ccbp.tech/login', 'React', '2024-12-20', '1'),
	('${v4()}', 'VR Website', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/vr-website-img.png', 'https://narasimhavr.ccbp.tech/', 'HTML & CSS', '2023-02-01', '2'),
	('${v4()}', 'Food Munch', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png', 'https://simhafood123.ccbp.tech/', 'HTML & CSS', '2023-01-10', '2'),
	('${v4()}', 'Speed Type Test', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/speed-type-test-img.png', 'https://simhatypingtest.ccbp.tech/', 'React', '2024-01-01', '2'),
	('${v4()}', 'Book Search', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-search-img.png', 'https://simhabookstore.ccbp.tech/', 'JS', '2024-06-01', '3'),
	('${v4()}', 'Blog List', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png', 'https://simhablogslist.ccbp.tech/', 'React', '2024-07-01', '4'),
	('${v4()}', 'Emoji Game', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png', 'https://simhaegame.ccbp.tech/', 'React', '2024-07-12', '2'),
	('${v4()}', 'Appointments App', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png', 'https://simhaappoint.ccbp.tech/', 'React', '2024-05-12', '2'),
	('${v4()}', 'Meme Generator', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/meme-generator-img.png', 'https://simhac44.ccbp.tech/', 'React', '2024-05-06', '4'),
	('${v4()}', 'Gradient Generator', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhagradient.ccbp.tech/', 'React', '2024-07-08', '4'),
	('${v4()}', 'Password Manager', 'https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719803/Screenshot_265_vypmix.png', 'https://simhapm.ccbp.tech/', 'React', '2024-12-12', '3'),
	('${v4()}', 'CryptoCurrency Tracker', 'https://res.cloudinary.com/dvgpe4x6t/image/upload/v1747719869/Screenshot_266_m8hyxk.png', 'https://simhactracker.ccbp.tech/', 'React', '2024-12-20', '2'),
	('${v4()}', 'Match Game', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simahmatchg.ccbp.tech/', 'React', '2024-12-20', '2'),
	('${v4()}', 'IPL Dashboard', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhaipldashb2.ccbp.tech/', 'React', '2024-12-18', '2'),
	('${v4()}', 'Amazon Prime', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhapvideo.ccbp.tech/', 'React', '2024-06-04', '4'),
	('${v4()}', 'ROCK Paper Scissors', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simharocpapsci.ccbp.tech/', 'React', '2024-12-16', '2'),
	('${v4()}', 'Todo List', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhatodolist.ccbp.tech/', 'JS', '2023-10-29', '2'),
	('${v4()}', 'Task Manager', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhamock1bc.ccbp.tech/', 'React', '2024-12-11', '2'),
	('${v4()}', 'Money Manager', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhamoneym.ccbp.tech/', 'React', '2024-11-11', '3'),
	('${v4()}', 'Stop Watch', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhac25a.ccbp.tech/', 'React', '2024-10-10', '4'),
	('${v4()}', 'Digital Clock', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhahooksclock.ccbp.tech/', 'React', '2024-09-02', '4'),
	('${v4()}', 'Notes App', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhahooksnotes.ccbp.tech/', 'React', '2024-11-01', '4'),
	('${v4()}', 'My CCBP Journey', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://simhajourney.ccbp.tech/', 'React', '2024-12-31', '3'),
	('${v4()}', 'Elite Spaces', 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png', 'https://elitespaces.ccbp.tech/', 'HTML & CSS', '2023-10-29', '4');`

const dbPath = path.join(__dirname, "portfolio.db")
let db = null
const initializeDbAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        // await db.run(myquery) to insert projects change myquery and insert
        app.listen(3000, () => {
            console.log(`Server is runnnig at localhost:3000`)
        })
    } catch (e) {
        console.log(`DB Error ${e}`)
    }
}
initializeDbAndServer()

app.get('/skills', async (req, res) => {
    const query = `SELECT * FROM skills;`
    const result = await db.all(query)
    res.send(result)
})
app.get('/projects', async (req, res) => {
    const { query } = req
    let { CATEGORY } = query
    const sqlQuery = `SELECT * FROM projects WHERE category LIKE '${CATEGORY}' ORDER BY priority,date DESC;`
    const result = await db.all(sqlQuery)
    //console.log(result)
    res.send(result)
})