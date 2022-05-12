const SkillsList = () => {
  // const skillName = props.skillName;
  // const skillValue = props.skillValue;
  const SkillsDatabase = [
    { "id": "1",
      "name": "Ruby on Rails",
      "value": "60",
      "category": "web"
    },
    { "id": "2",
      "name": "Javascript",
      "value": "40",
      "category": "web"
    },
    { "id": "3",
      "name": "ReactJS",
      "value": "40",
      "category": "web"
    },
    { "id": "4",
      "name": "CSS",
      "value": "60",
      "category": "web"
    },
    { "id": "5",
      "name": "HTML",
      "value": "60",
      "category": "web"
    },
    { "id": "6",
      "name": "Bootstrap",
      "value": "40",
      "category": "web"
    }
  ]


  const webSkills = SkillsDatabase.filter( webSkill => webSkill.category === "web" );


  return (
    <div className="skill-details">
      { webSkills.map((webSkill) => (
          <div className="chart" key={webSkill.id} >
            <p>{webSkill.name}</p>
            <footer>
              <div className={`filled-${ webSkill.value }`}>{`${ webSkill.value }%`}</div>
              <div className={`unfilled-${ 100 - parseInt(webSkill.value, 10) }`}>{`${ 100 - parseInt(webSkill.value, 10) }%`}</div>
            </footer>
          </div>
        )
      )}
    </div>
  )
}

export default SkillsList;






/* <div>
        <h2>Data</h2>
      </div>
      <div>
        <h2>Project Management</h2>
      </div>
      <div>
  <h2>Soft skills</h2>*/
