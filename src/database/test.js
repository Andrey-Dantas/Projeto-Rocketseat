const database = require('./db');
const createProffy = require('./createProffy')

database.then(async (db) => {
  proffyValue = {
    name: "Andrey Dantas",
    avatar: "https://avatars1.githubusercontent.com/u/63676545?s=460&u=877934979382f4d8bacaf82bc3a637f86e3cc36b&v=4", 
    whatsapp: "83993486548", 
    bio: "Odeio minha vida e o league of legends", 
  }

  classValue = {
    subject: 1, 
    cost: "99", 
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 610
    }
  ]

  //await createProffy(db, { proffyValue, classValue, classScheduleValues})


  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  const selectedClassAndProffys = await db.all(`
    SELECT class.*, proffys.*
    FROM proffys
    JOIN class ON (class.proffy_id = proffys.id)
    WHERE class.proffy_id = 1;
  `)
  //console.log(selectedClassAndProffys)

  const selectedClassSchedules = await db.all(`
    SELECT class_schedule.*
    from class_schedule
    where class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  console.log(selectedClassSchedules)
})