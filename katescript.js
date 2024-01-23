let note1 = "A2";
let note2 = "A2";
let note3 = "A2";
let name_chord1 = "none";
let note1_2 = "A2";
let note2_2 = "A2";
let note3_2 = "A2";
let name_chord2 = "none";
let note1_3 = "A2";
let note2_3 = "A2";
let note3_3 = "A2";
let name_chord3 = "none";
let note1_4 = "A2";
let note2_4 = "A2";
let note3_4 = "A2";
let name_chord4 = "none";
let note1_5 = "A2";
let note2_5 = "A2";
let note3_5 = "A2";
let name_chord5 = "none";
let note1_6 = "A2";
let note2_6 = "A2";
let note3_6 = "A2";
let name_chord6= "none";
function chord1(){
     note1 = document.getElementById("note1_chord1").value;
     note2 = document.getElementById("note2_chord1").value;
     note3 = document.getElementById("note3_chord1").value;
     name_chord1 =  document.getElementById("name_chord1").value;
     chord1_result = [note1, note2, note3, name_chord1];
console.log(chord1_result);
document.getElementById("chordNameDisplay").textContent = name_chord1;
   return chord1_result;
}
function chord2(){
    note1_2 = document.getElementById("note1_chord2").value;
    note2_2 = document.getElementById("note2_chord2").value;
    note3_2 = document.getElementById("note3_chord2").value;
    name_chord2 =  document.getElementById("name_chord2").value;
    chord2_result = [note1_2, note2_2, note3_2, name_chord2];
console.log(chord2_result);
document.getElementById("chordNameDisplay2").textContent = name_chord2;
  return chord2_result;
}
function chord3(){
    note1_3 = document.getElementById("note1_chord3").value;
    note2_3 = document.getElementById("note2_chord3").value;
    note3_3 = document.getElementById("note3_chord3").value;
    name_chord3 =  document.getElementById("name_chord3").value;
    chord3_result = [note1_3, note2_3, note3_3, name_chord3];
console.log(chord3_result);
document.getElementById("chordNameDisplay3").textContent = name_chord3;
  return chord3_result;
}
function chord4(){
    note1_4 = document.getElementById("note1_chord4").value;
    note2_4 = document.getElementById("note2_chord4").value;
    note3_4 = document.getElementById("note3_chord4").value;
    name_chord4 =  document.getElementById("name_chord4").value;
    chord4_result = [note1_4, note2_4, note3_4, name_chord4];
console.log(chord4_result);
document.getElementById("chordNameDisplay4").textContent = name_chord4;
  return chord4_result;
}
function chord5(){
    note1_5 = document.getElementById("note1_chord5").value;
    note2_5 = document.getElementById("note2_chord5").value;
    note3_5 = document.getElementById("note3_chord5").value;
    name_chord5 =  document.getElementById("name_chord5").value;
    chord5_result = [note1_5, note2_5, note3_5, name_chord5];
console.log(chord5_result);
document.getElementById("chordNameDisplay5").textContent = name_chord5;
  return chord5_result;
}
function chord6(){
    note1_6 = document.getElementById("note1_chord6").value;
    note2_6 = document.getElementById("note2_chord6").value;
    note3_6 = document.getElementById("note3_chord6").value;
    name_chord6 =  document.getElementById("name_chord6").value;
    chord6_result = [note1_6, note2_6, note3_6, name_chord6];
console.log(chord6_result);
document.getElementById("chordNameDisplay6").textContent = name_chord6;
  return chord6_result;
}
function noteToFrequency(note) {
    const noteMap = {
        'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13, 'E': 329.63, 'F': 349.23,
        'F#': 369.99, 'G': 392.00, 'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
    };
    
    const octave = parseInt(note.slice(-1));
    const noteName = note.slice(0, -1);

    if (noteMap.hasOwnProperty(noteName)) {
        return noteMap[noteName] * Math.pow(2, octave - 4);
    }

    return 0;
}

function playNotes(notesArray, timeInterval) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    notesArray.forEach((notes, index) => {
        const oscillators = notes.map(note => {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(noteToFrequency(note), audioContext.currentTime);
            return oscillator;
        });

        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);

        oscillators.forEach(oscillator => {
            oscillator.connect(gainNode);
        });

        gainNode.connect(audioContext.destination);

        oscillators.forEach(oscillator => {
            oscillator.start(audioContext.currentTime + index * timeInterval);
            oscillator.stop(audioContext.currentTime + (index + 1) * timeInterval);
        });
    });
}

function C_1() {
    playNotes([[note1, note2, note3]], 0.6);
}
function C_2() {
    playNotes([[note1_2, note2_2, note3_2]], 0.6);
}
function C_3() {
    playNotes([[note1_3, note2_3, note3_3]], 0.6);
}
function C_4() {
    playNotes([[note1_4, note2_4, note3_4]], 0.6);
}
function C_5() {
    playNotes([[note1_5, note2_5, note3_5]], 0.6);
}
function C_6() {
    playNotes([[note1_6, note2_6, note3_6]], 0.6);
}