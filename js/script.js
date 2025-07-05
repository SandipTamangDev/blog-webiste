const blogData = [

  {
    title: "Blog 1",
    description: "This is the first blog post.",
    image: "images/img8.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img1.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img2.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img3.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img4.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img5.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img6.jpg",
    link: "#"
  },

  {
    title: "Blog 2",
    description: "Second blog post description goes here.",
    image: "images/img7.jpg",
    link: "#"
  }

  // Add more blog items as needed
];

const blogContainer = document.getElementById('blog-container');
const blogTemplate = document.getElementById('blog-card-template');

blogData.forEach(blog => {
  const clone = blogTemplate.content.cloneNode(true);

  clone.querySelector('img').src = blog.image;
  clone.querySelector('img').alt = blog.title;
  clone.querySelector('h3').textContent = blog.title;
  clone.querySelector('p').textContent = blog.description;
  clone.querySelector('a').href = blog.link;

  blogContainer.appendChild(clone);
});



const heroData = [

  {
    title: "Blog 1",
    description: "This is the first blog post.",
    image: "images/img11.jpg",
    link: "#"
  },

  // Add more blog items as needed
];

const heroContainer = document.getElementById('hero-container');
const heroTemplate = document.getElementById('hero-card-template');

heroData.forEach(hero => {
  const clone = heroTemplate.content.cloneNode(true);
  clone.querySelector('img').src = hero.image;
  clone.querySelector('img').alt = hero.title;
  clone.querySelector('h3').textContent = hero.title;
  clone.querySelector('p').textContent = hero.description;
  clone.querySelector('a').href = hero.link;
  heroContainer.appendChild(clone);
});




const featuredData = [

  {
    title: "Blog 1",
    description: "This is the first blog post.",
    image: "images/img10.jpg",
    link: "#"
  },

  // Add more blog items as needed
];

const featuredContainer = document.getElementById('featured-container');
const featuredTemplate = document.getElementById('featured-card-template');

featuredData.forEach(featured => {
  const clone = featuredTemplate.content.cloneNode(true);
  clone.querySelector('img').src = featured.image;
  clone.querySelector('img').alt = featured.title;
  clone.querySelector('h3').textContent = featured.title;
  clone.querySelector('p').textContent = featured.description;
  clone.querySelector('a').href = featured.link;
  featuredContainer.appendChild(clone);
});
