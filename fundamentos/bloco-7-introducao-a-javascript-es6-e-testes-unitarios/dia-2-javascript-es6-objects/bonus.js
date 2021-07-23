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

  const requisitoConta = (mat) =>{
      const merge = {lesson1, lesson2, lesson3};
      let estudantesDeMatematica = 0
      let allLesson = {
          professor: '',
          aulas: [],
          estudantes: 0
      }
      for (let i = 0; i < Object.keys(merge).length; i += 1){
          if(Object.values(merge)[i].materia === mat){
              allLesson.estudantes += Object.values(merge)[i].numeroEstudantes
              allLesson.aulas.push(mat)
              allLesson.professor = Object.values(merge)[i].professor
              
          }
      }

      console.log(allLesson)
  }
  requisitoConta('Matemática')