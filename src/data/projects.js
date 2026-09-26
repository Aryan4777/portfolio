import project1Image from "../assets/Images/image_1.jpg";
import project1Dashboard from "../assets/Images/image_2.jpg";
import project1Analysis from "../assets/Images/image_3.jpg";

import project2Image from "../assets/Images/image_1.jpg";

const projects = [
  {
    id: "sales-analysis",

    title: "Sales Data Analysis",

    category: "Data Analysis",

    shortDescription:
      "An analysis of sales data to identify revenue trends, top-performing products, and business opportunities.",

    description:
      "This project analyzes a sales dataset to understand business performance, customer behavior, and product-level trends.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "SQL"
    ],

    mainImage: project1Image,

    screenshots: [
      {
        image: project1Dashboard,
        caption: "Sales analysis dashboard"
      },
      {
        image: project1Analysis,
        caption: "Revenue and product analysis"
      }
    ],

    objective:
      "The main objective was to transform raw sales data into meaningful insights that could support business decisions.",

    process: [
      "Collected and inspected the dataset",
      "Cleaned missing and inconsistent values",
      "Performed exploratory data analysis",
      "Analyzed sales and revenue trends",
      "Created visualizations",
      "Identified important business insights"
    ],

    results:
      "The analysis identified the strongest-performing products, important sales trends, and areas where business performance could be improved.",

    learned:
      "This project improved my skills in data cleaning, exploratory data analysis, visualization, and communicating analytical findings.",

    github:
      "https://github.com/YOUR_USERNAME/sales-analysis"
  },


  {
    id: "second-project",

    title: "Your Second Project",

    category: "Data Visualization",

    shortDescription:
      "A short description explaining what this project does and the problem it solves.",

    description:
      "Write a more detailed explanation of your second project here.",

    technologies: [
      "Python",
      "SQL",
      "Power BI"
    ],

    mainImage: project2Image,

    screenshots: [],

    objective:
      "Explain the main objective of this project.",

    process: [
      "Step one",
      "Step two",
      "Step three"
    ],

    results:
      "Explain the major results or findings from the project.",

    learned:
      "Explain what you learned from completing the project.",

    github:
      "https://github.com/YOUR_USERNAME/second-project"
  }
];

export default projects;