import person_I from "/assets/images/person_1.jpg";
import person_II from "/assets/images/person_2.jpg";
import person_III from "/assets/images/person_3.jpg";
import Post_1 from "/assets/images/post-1.jpg";
import Post_2 from "/assets/images/post-2.jpg";
import Post_3 from "/assets/images/post-3.jpg";
import person_IV from "/assets/images/person_4.jpg";
import productImage_1 from "/assets/images/product-1.png";
import productImage_2 from "/assets/images/product-2.png";
import productImage_3 from "/assets/images/product-3.png";





const testimonialsData = [
	{
		id: 1,
		quote:`Donec facilisis quam ut purus rutrum lobortis. 
				Donec vitae odio quis nisl dapibus 
				malesuada. Nullam ac aliquet velit. Aliquam vulputate 
				velit imperdiet dolor tempor tristique. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis 
				egestas. Integer convallis volutpat dui quis scelerisque.`,
		name: "Maria Jones",
		designation: "CEO, Co-Founder, XYZ Inc.",
		image: person_I
	},
	{
		id: 2,
		quote:`Donec facilisis quam ut purus rutrum lobortis. 
				Donec vitae odio quis nisl dapibus 
				malesuada. Nullam ac aliquet velit. Aliquam vulputate 
				velit imperdiet dolor tempor tristique. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis 
				egestas. Integer convallis volutpat dui quis scelerisque.`,
		name: "Maria Jones",
		designation: "CEO, Co-Founder, XYZ Inc.",
		image: person_II
	},
    {
		id: 3,
		quote:`Donec facilisis quam ut purus rutrum lobortis. 
				Donec vitae odio quis nisl dapibus 
				malesuada. Nullam ac aliquet velit. Aliquam vulputate 
				velit imperdiet dolor tempor tristique. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis 
				egestas. Integer convallis volutpat dui quis scelerisque.`,
		name: "Maria Jones",
		designation: "CEO, Co-Founder, XYZ Inc.",
		image: person_III
	}
]




const menuData = [
	{
	  id: 1,
	  listOne:"About us",
	  listTwo: "Services",
	  listThree: "Blog",
	  listFour: "Contact us",

	},
	{
		id: 2,
		listOne:"Support",
		listTwo: "Knowledge base",
		listThree: "Live Chat",
	  },
	  {
		id: 3,
		listOne:"Jobs",
		listTwo: "Our team",
		listThree: "Leadership",
		listFour: "Privacy Policy",
  
	  },
	  {
		id: 4,
		listOne:"Nordic Chair",
		listTwo: "Kruzo Aero",
		listThree: "Ergonomic Chair",
		listFour: "",
  
	  }


]


const BlogInfoComponentData = [

	{
		id: 1,
		image: Post_1, 
		postContentEntry: "First Time Home Owner Ideas",
		name: "Kristin Watson",
		date: "Dec 19, 2021"
	},
	{
		id: 2,
		image: Post_2, 
		postContentEntry: "How To Keep Your Furniture Clean",
		name: "Robert Fox",
		date: "Dec 15, 2021"
	},
	{
		id: 3,
		image: Post_1, 
		postContentEntry: "Small Space Furniture Apartment Ideas",
		name: "Kristin Watson",
		date: "Dec 12, 2021"
	},
	{
		id: 4,
		image: Post_3, 
		postContentEntry: "First Time Home Owner Ideas",
		name: "Kristin Watson",
		date: "Dec 19, 2021"
	},
	{
		id: 5,
		image: Post_2, 
		postContentEntry: "How To Keep Your Furniture Clean",
		name: "Robert Fox",
		date: "Dec 15, 2021"
	},
	{
		id: 6,
		image: Post_3, 
		postContentEntry: "Small Space Furniture Apartment Ideas",
		name: "Kristin Watson",
		date: "Dec 12, 2021"
	},
	{
		id: 7,
		image: Post_1, 
		postContentEntry: "First Time Home Owner Ideas",
		name: "Kristin Watson",
		date: "Dec 19, 2021"
	},
	{
		id: 8,
		image: Post_2, 
		postContentEntry: "How To Keep Your Furniture Clean",
		name: "Robert Fox",
		date: "Dec 15, 2021"
	},
	{
		id: 9,
		image: Post_2, 
		postContentEntry: "Small Space Furniture Apartment Ideas",
		name: "Kristin Watson",
		date: "Dec 12, 2021"
	}
]

const teamSectionData = [
	{
		id: 1,
		image: person_I,
		firstName: "Lawson",
		lastName: "Arnold",
		designation: "CEO, Founder, Atty.",
		bioData: ` Separated they live in.Separated they 
					live in Bookmarksgrove right at the coast
		  			of the Semantics, a large language ocean.`

	},
	{
		id: 2,
		image: person_II,
		firstName: "Jeremy",
		lastName: "Walker",
		designation: "CEO, Founder, Atty.",
		bioData: ` Separated they live in.Separated they 
					live in Bookmarksgrove right at the coast
		  			of the Semantics, a large language ocean.`

	},
	{
		id: 3,
		image: person_III,
		firstName: "Patrik",
		lastName: "White",
		designation: "CEO, Founder, Atty.",
		bioData: ` Separated they live in.Separated they 
					live in Bookmarksgrove right at the coast
		  			of the Semantics, a large language ocean.`

	},
	{
		id: 4,
		image: person_IV,
		firstName: "Kathryn",
		lastName: "Ryan",
		designation: "CEO, Founder, Atty.",
		bioData: ` Separated they live in.Separated they 
					live in Bookmarksgrove right at the coast
		  			of the Semantics, a large language ocean.`

	}
]

const PopularProductData = [
	{
		id: 1,
		productImage: productImage_1,
		productName: "Nordic Chair",
		productDecription: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
	},
	{
		id: 2,
		productImage: productImage_2,
		productName: "Nordic Chair",
		productDecription: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
	},
	{
		id: 3,
		productImage: productImage_3,
		productName: "Ergonomic Chair",
		productDecription: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
	}

]



export { testimonialsData, menuData, BlogInfoComponentData, teamSectionData, PopularProductData };

