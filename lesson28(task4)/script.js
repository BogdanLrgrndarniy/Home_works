let classroomsAcademy = [
    {
        nametheAudience: 'engineeringMathematics',
        facultyName:"Mathematics",
        seats: 12,
    
      },
    {
        nametheAudience: 'linguistics',
        facultyName:"english",
        seats: 15,
    
      },
      {
        nametheAudience: 'advancedEnglish',
        facultyName:"english",
        seats: 13,
    
      },
    {
        nametheAudience: 'locallore',
        facultyName:"Ukrainian language",
        seats: 11,
      
      }
    ]
    
    // Вывод на экран всех аудиторий;
    
    function outputtingAudiences(classroomsAcademy){
        for(let item of classroomsAcademy){
        console.log(`${item.nametheAudience}, ${item.facultyName} : ${item.seats}`)
        }
    }
    
    outputtingAudiences(classroomsAcademy);
    
    // Вывод на экран аудиторий для указанного факультета;
    
    function getSpecifiedFaculty(facultyName, classroomsAcademy){
         classroomsAcademy.forEach(function(elem){
           let elemFacultyName = elem.facultyName;
           let elemNametheAudience = elem.nametheAudience;
          if(elemFacultyName == facultyName) {
              console.log(`${elemNametheAudience} Вывод на экран аудиторий для указанного факультета`)
            }
       });
    
    }
    getSpecifiedFaculty("Ukrainian language", classroomsAcademy);
    
    // Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
    
    let groupStudent = {
        nameGroup: 'English teachers',
        facultyName:"english",
        amountStudent: 12,
      };
    
    
    function getGropuStudent(studentGroup,arrclassroomsAcademy){  
      for(let elem in studentGroup) {
        arrclassroomsAcademy.forEach(function(item){
      let itemFacultyName = item.facultyName;
         if (studentGroup[elem] == itemFacultyName){
           console.log(`${item.nametheAudience}`)
         }
      })
       
         
    
    }
    
      
       }
                   
    getGropuStudent(groupStudent,classroomsAcademy);  
    
    // Функция сортировки аудиторий по количеству мест;
    
    function sortingAudiencesSeats(arrSort){
     arrSort.sort((a, b) => a.seats > b.seats ? 1 : -1);
      console.log(arrSort);
    }
    sortingAudiencesSeats(classroomsAcademy);
    
    // Функция сортировки аудиторий по названию (по алфавиту).
    
    function sortingAudiencesTitle(arrSort){
     arrSort.sort(function(a, b){
    let nameA=a.nametheAudience.toLowerCase(), nameB=b.nametheAudience.toLowerCase()
    if (nameA < nameB) //сортируем строки по возрастанию
      return -1
    if (nameA > nameB)
      return 1
    return 0 // Никакой сортировки
    })
      console.log(arrSort)
    }
    sortingAudiencesTitle(classroomsAcademy);