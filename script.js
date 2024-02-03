const Menu = [
    {
        id: 1,
        imageUrl: "https://wallpaperaccess.com/full/2185848.jpg",
        name: "Orange Juice",
        desc: "Freshly squeezed orange juice with pulp. Healthy and refreshing!",
        price: "₹150" 
    },
    {
        id: 2,
        imageUrl: "https://info.ehl.edu/hubfs/1440/1440x960-green-smoothies-1.jpg",
        name: "Green Smoothie",
        desc: "A blend of spinach, kale, banana, and pineapple. Nutrient-packed goodness!",
        price: "₹180" 
    },
    {
        id: 3,
        imageUrl: "https://th.bing.com/th/id/OIP.V-3MPBJX19I6rAM0IibHnwHaE8?pid=ImgDet&dpr=1.3",
        name: "Moosambi Juice",
        desc: "Refreshing moosambi (sweet lime) juice. Perfect for a hot day!",
        price: "₹120" 
    },
    {
        id: 4,
        imageUrl: "https://th.bing.com/th/id/OIP.MdhnusVsQLXlAv4tXdYn2AHaF7?pid=ImgDet&dpr=1.3",
        name: "Apple Juice",
        desc: "100% pure apple juice, no additives. Deliciously crisp!",
        price: "₹200" 
    },
    {
        id: 5,
        imageUrl: "https://i.pinimg.com/originals/6b/91/c2/6b91c21c525c161ad9ac34ce1a51a35a.jpg",
        name: "Oreo Shake",
        desc: "A delightful blend of Oreos and vanilla ice cream. A sweet treat!",
        price: "₹220" 
    },
    {
        id: 6,
        imageUrl: "https://assets.telegraphindia.com/telegraph/2022/Feb/1644507691_extreme-kit-kat-shake.jpg",
        name: "Kit Kat Shake",
        desc: "Rich and chocolaty shake with Kit Kat bars. Chocoholics rejoice!",
        price: "₹240" 
    },
    {
        id: 7,
        imageUrl: "https://wallpapercave.com/wp/wp8454631.jpg",
        name: "Fruit Salad",
        desc: "A healthy mix of fresh fruits. Colorful and nutritious!",
        price: "₹150" 
    },
    {
        id: 8,
        imageUrl: "https://wallpapercave.com/wp/wp8809399.jpg",
        name: "Mango Shake",
        desc: "Creamy mango shake made with ripe Alphonso mangoes. A tropical delight!",
        price: "₹180"
    },
    {
        id: 9,
        imageUrl: "https://th.bing.com/th/id/OIP.UV2dE7jLOZc1wZhF7DWHIQHaEK?pid=ImgDet&dpr=1.3",
        name: "Strawberry Shake",
        desc: "Velvety strawberry shake with real strawberries. Sweet and creamy!",
        price: "₹180" 
    },
    {
        id: 10,
        imageUrl: "https://www.bakkal.ae/Uploads/UrunResimleri/buyuk/Fresh-Pomegranate-Juice---1-lt-4686.jpg",
        name: "Pomegranate Juice",
        desc: "Refreshing pomegranate juice with a burst of antioxidants. A health booster!",
        price: "₹200" 
    }
]

const menuList = document.getElementById("menulist");

Menu.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("juice-item");
    menuItem.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p><strong>Price: ${item.price}</strong></p> 
    `;
    menuList.appendChild(menuItem);
});
