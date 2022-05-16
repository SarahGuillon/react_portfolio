

const SkillsList = (props) => {
  const skillCategory = props.skillCategory;

  const SkillsDatabase = [
    { "id": "1",
      "name": "Ruby on Rails",
      "value": "60",
      "category": "web"
    },
    { "id": "2",
    "name": "CSS",
    "value": "60",
    "category": "web"
    },
    { "id": "3",
      "name": "HTML",
      "value": "60",
      "category": "web"
    },
    { "id": "4",
      "name": "Javascript",
      "value": "40",
      "category": "web"
    },
    { "id": "5",
      "name": "ReactJS",
      "value": "40",
      "category": "web"
    },
    { "id": "6",
      "name": "Bootstrap",
      "value": "30",
      "category": "web"
    },
    { "id": "7",
      "name": "Figma",
      "value": "30",
      "category": "web"
    },
    { "id": "8",
    "name": "Git",
    "value": "40",
    "category": "project management"
    },
    { "id": "9",
    "name": "Github",
    "value": "40",
    "category": "project management"
    },
    { "id": "10",
    "name": "Notion",
    "value": "40",
    "category": "project management"
    },
    { "id": "11",
    "name": "SQL",
    "value": "30",
    "category": "data"
    },
    { "id": "12",
    "name": "Excel",
    "value": "80",
    "category": "data"
    },
    { "id": "13",
    "name": "SAP",
    "value": "50",
    "category": "data"
    },
    { "id": "14",
    "name": "Business Object",
    "value": "50",
    "category": "data"
    },
    { "id": "15",
    "name": "Bix",
    "value": "50",
    "category": "data"
    },
    { "id": "16",
    "name": "Autonomy",
    "value": "70",
    "category": "soft skills"
    },
    { "id": "17",
    "name": "Analytical skills",
    "value": "80",
    "category": "soft skills"
    },
    { "id": "18",
    "name": "Rigor",
    "value": "70",
    "category": "soft skills"
    },
    { "id": "19",
    "name": "Curiosity",
    "value": "60",
    "category": "soft skills"
    },
    { "id": "20",
    "name": "Team Work",
    "value": "60",
    "category": "soft skills"
    },
    { "id": "21",
    "name": "Adaptability",
    "value": "80",
    "category": "soft skills"
    },
  ]


  const skillsDetailsPerCategory = SkillsDatabase.filter( skillDetailsPerCategory => skillDetailsPerCategory.category === skillCategory.toLowerCase() );


  return (
    <div className="skills-details">
      { skillsDetailsPerCategory.map((skillDetailsPerCategory) => (
        <div className="chart" key={skillDetailsPerCategory.id} >
          <p>{skillDetailsPerCategory.name}</p>
          <footer>
            <div className={`filled-${ skillDetailsPerCategory.value }`}>{`${ skillDetailsPerCategory.value }%`}</div>
            {/* <div className={`unfilled-${ 100 - parseInt(webSkill.value, 10) }`}>{`${ 100 - parseInt(webSkill.value, 10) }%`}</div> */}
          </footer>
        </div>
      ))}
    </div>
    )
  }

export default SkillsList;
