const musicdata = {
  // Мажор (Dur)
  'C-dur': ['c','d','e','f','g','a','h'],
  'G-dur': ['g','a','h','c','d','e','fis'],
  'D-dur': ['d','e','fis','g','a','h','cis'],
  'A-dur': ['a','h','cis','d','e','fis','gis'],
  'E-dur': ['e','fis','gis','a','h','cis','dis'],
  'H-dur': ['h','cis','dis','e','fis','gis','ais'],
  'Fis-dur': ['fis','gis','ais','h','cis','dis','eis'],
  'Cis-dur': ['cis','dis','eis','fis','gis','ais','his'],
  'F-dur': ['f','g','a','b','c','d','e'],
  'B-dur': ['b','c','d','es','f','g','a'],
  'Es-dur': ['es','f','g','as','b','c','d'],
  'As-dur': ['as','b','c','des','es','f','g'],
  'Des-dur': ['des','es','f','ges','as','b','c'],
  'Ges-dur': ['ges','as','b','ces','des','es','f'],
  'Ces-dur': ['ces','des','es','fes','ges','as','b'],

  // Энгармонические дубликаты мажора для полноты 24-х (с диезами)
  'Fes-dur': ['fes','ges','as','heses','ces','des','es'],       // enharm. E-dur
  'E-dur (enh)': ['e','fis','gis','a','h','cis','dis'],         // дубль к Fes-dur
  'Hes-dur': ['hes','ces','des','eses','fes','ges','as'],       // enharm. A-dur
  'A-dur (enh)': ['a','h','cis','d','e','fis','gis'],          // дубль к Hes-dur
  'Eses-dur': ['eses','fes','ges','ases','beses','ces','des'],  // enharm. D-dur
  'D-dur (enh)': ['d','e','fis','g','a','h','cis'],            // дубль к Eses-dur
  'Ases-dur': ['ases','beses','ces','deses','eses','fes','ges'],// enharm. G-dur
  'G-dur (enh)': ['g','a','h','c','d','e','fis'],              // дубль к Ases-dur
  'Deses-dur': ['deses','eses','fes','geses','ases','beses','ces'], // enharm. C-dur
  'C-dur (enh)': ['c','d','e','f','g','a','h'],                // дубль к Deses-dur

  // Минор (Moll) — натуральные
  'a-moll': ['a','h','c','d','e','f','g'],
  'e-moll': ['e','fis','g','a','h','c','d'],
  'h-moll': ['h','cis','d','e','fis','g','a'],
  'fis-moll': ['fis','gis','a','h','cis','d','e'],
  'cis-moll': ['cis','dis','e','fis','gis','a','h'],
  'gis-moll': ['gis','ais','h','cis','dis','e','fis'],
  'dis-moll': ['dis','eis','fis','gis','ais','h','cis'],
  'ais-moll': ['ais','his','cis','dis','eis','fis','gis'],
  'd-moll': ['d','e','f','g','a','b','c'],
  'g-moll': ['g','a','b','c','d','es','f'],
  'c-moll': ['c','d','es','f','g','as','b'],
  'f-moll': ['f','g','as','b','c','des','es'],
  'b-moll': ['b','c','des','es','f','ges','as'],
  'es-moll': ['es','f','ges','as','b','ces','des'],
  'as-moll': ['as','b','ces','des','es','fes','ges'],

  // Энгармонические дубликаты минора для полноты 24-х (с двойными знаками)
  'fes-moll': ['fes','ges','eses','des','ces','heses','as'],      // enharm. e-moll
  'e-moll (enh)': ['e','fis','g','a','h','c','d'],
  'ces-moll': ['ces','des','eses','fes','ges','ases','beses'],    // enharm. h-moll
  'h-moll (enh)': ['h','cis','d','e','fis','g','a'],
  'ges-moll': ['ges','as','beses','ces','des','eses','fes'],      // enharm. fis-moll
  'fis-moll (enh)': ['fis','gis','a','h','cis','d','e'],
  'des-moll': ['des','es','fes','ges','as','beses','ces'],        // enharm. cis-moll
  'cis-moll (enh)': ['cis','dis','e','fis','gis','a','h'],
  'as-es-moll': ['as','beses','ces','deses','eses','fes','ges'],  // enharm. gis-moll
  'gis-moll (enh)': ['gis','ais','h','cis','dis','e','fis'],
  'es-es-moll': ['es','fes','ges','ases','beses','ces','des'],    // enharm. dis-moll
  'dis-moll (enh)': ['dis','eis','fis','gis','ais','h','cis'],
  'ais-es-moll': ['ais','bisis','cis','dis','eis','fis','gis'],   // формальный дубль
  'ais-moll (enh)': ['ais','his','cis','dis','eis','fis','gis']
};



console.log(musicdata["A-dur (enh)"][1])
function findStep(TONALNOST){
}
