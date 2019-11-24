export const types_data = {
  "Normal": {
    "immunes": ["Ghost"],
    "weaknesses": ["Rock","Steel"],
    "strengths": []
  },
  "Fire": {
    "immunes": [],
    "weaknesses": ["Fire","Water","Rock","Dragon"],
    "strengths": ["Grass","Ice","Bug","Steel"]
  },
  "Water": {
    "immunes": [],
    "weaknesses": ["Water","Grass","Dragon"],
    "strengths": ["Fire","Ground","Rock"]
  },
  "Electric": {
    "immunes": ["Ground"],
    "weaknesses": ["Electric","Grass","Dragon"],
    "strengths": ["Water","Flying"]
  },
  "Grass": {
    "immunes": [],
    "weaknesses": ["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
    "strengths": ["Water","Ground","Rock"]
  },
  "Ice": {
    "immunes": [],
    "weaknesses": ["Fire","Water","Ice","Steel"],
    "strengths": ["Grass","Ground","Flying","Dragon"]
  },
  "Fighting": {
    "immunes": ["Ghost"],
    "weaknesses": ["Poison","Flying","Psychic","Bug","Fairy"],
    "strengths": ["Normal","Ice","Rock","Dark","Steel"]
  },
  "Poison": {
    "immunes": ["Steel"],
    "weaknesses": ["Poison","Ground","Rock","Ghost"],
    "strengths": ["Grass","Fairy"]
  },
  "Ground": {
    "immunes": ["Flying"],
    "weaknesses": ["Grass","Bug"],
    "strengths": ["Fire","Electric","Poison","Rock","Steel"]
  },
  "Flying": {
    "immunes": [],
    "weaknesses": ["Electric","Rock","Steel"],
    "strengths": ["Grass","Fighting","Bug"]
  },
  "Psychic": {
    "immunes": ["Dark"],
    "weaknesses": ["Psychic","Steel"],
    "strengths": ["Fighting","Poison"]
  },
  "Bug": {
    "immunes": [],
    "weaknesses": ["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
    "strengths": ["Grass","Psychic","Dark"]
  },
  "Rock": {
    "immunes": [],
    "weaknesses": ["Fighting","Ground","Steel"],
    "strengths": ["Fire","Ice","Flying","Bug"]
  },
  "Ghost": {
    "immunes": ["Normal"],
    "weaknesses": ["Dark"],
    "strengths": ["Psychic","Ghost"]
  },
  "Dragon": {
    "immunes": ["Fairy"],
    "weaknesses": ["Steel"],
    "strengths": ["Dragon"]
  },
  "Dark": {
    "immunes": [],
    "weaknesses": ["Fighting","Dark","Fairy"],
    "strengths": ["Psychic","Ghost"]
  },
  "Steel": {
    "immunes": [],
    "weaknesses": ["Fire","Water","Electric","Steel"],
    "strengths": ["Ice","Rock","Fairy"]
  },
  "Fairy": {
    "immunes": [],
    "weaknesses": ["Fire","Poison","Steel"],
    "strengths": ["Fighting","Dragon","Dark"]
  }
}

export const types_color = {
  "Normal": "#aba87c",
  "Fire": "#ff7d3d",
  "Water": "#5192ea",
  "Electric": "#ffce4d",
  "Grass": "#6ac75e",
  "Ice": "#88d8d8",
  "Fighting": "#cf2b2c",
  "Poison": "#a8419d",
  "Ground": "#e7be72",
  "Flying": "#a692eb",
  "Psychic": "#ff5687",
  "Bug": "#a9b83e",
  "Rock": "#bd9f47",
  "Ghost": "#715895",
  "Dragon": "#6740f1",
  "Dark": "#73584a",
  "Steel": "#b7b8ce",
  "Fairy": "#fdc9e2"
}