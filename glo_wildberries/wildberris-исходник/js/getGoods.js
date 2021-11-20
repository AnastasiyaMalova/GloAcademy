const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    const getData = () => {
        fetch('https://wildberries-86a31-default-rtdb.europe-west1.firebasedatabase.app/db.json')
            .then((res) => res.json())
            .then((data) => {
                //сохраняем полученные данные в local storage
                localStorage.setItem('goods', JSON.stringify(data));
                //выведем данные в консоль
                const goods = JSON.parse(localStorage.getItem('goods'));
                console.log(goods);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

    // localStorage.removeItem('goods');
    // console.log(localStorage);
}

getGoods();