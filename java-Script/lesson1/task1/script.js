let date = prompt("Ведите cвой год рождения");




function get_current_age(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }
  
  alert(`Вам ${get_current_age}`);
  