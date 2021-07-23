const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const requisitoI = (changed, key, value) =>{
      changed[key] = value
      console.log(changed)
      console.log(Object.keys(changed).length)
      console.log(Object.values(changed))
      const allLesson = {lesson1,lesson2,lesson3}
      console.log(allLesson)
      console.log(allLesson.lesson1.numeroEstudantes+allLesson.lesson2.numeroEstudantes+allLesson.lesson3.numeroEstudantes)
  }
  requisitoI(lesson2, 'turno', 'manhã')

  const requisitoVII = (obj, n) =>{
      console.log(Object.values(obj)[n])
  }
  requisitoVII(lesson1,0)

  const requisitoVIII = (obj, key, val) =>{
      console.log(obj[key] === val ? true : false)
  }
  requisitoVIII(lesson3, 'turno', 'noite')