export const types_data = {
  "normal": {
    "attack": {
      "effective": [],
      "ineffective": ["rock", "steel"],
      "immunes": ["ghost"]
    },
    "defence": {
      "effective": ["fighting"],
      "ineffective": [],
      "immunes": ["ghost"]
    }
  },
  "fire": {
    "attack": {
      "effective": ["grass", "ice", "bug", "steel"],
      "ineffective": ["fire", "water", "rock", "dragon"],
      "immunes": []
    },
    "defence": {
      "effective": ["fire", "grass", "ice", "bug", "steel", "fairy"],
      "ineffective": ["water", "ground", "rock"],
      "immunes": []
    }
  },
  "water": {
    "attack": {
      "effective": ["fire", "ground", "rock"],
      "ineffective": ["water", "grass", "dragon"],
      "immunes": []
    },
    "defence": {
      "effective": ["fire", "water", "ice", "steel"],
      "ineffective": ["electric", "grass"],
      "immunes": []
    }
  },
  "electric": {
    "attack": {
      "effective": ["water", "flying"],
      "ineffective": ["electric", "grass", "dragon"],
      "immunes": ["ground"]
    },
    "defence": {
      "effective": ["electric", "flying", "steel"],
      "ineffective": ["ground"],
      "immunes": []
    }
  },
  "grass": {
    "attack": {
      "effective": ["water", "ground", "rock"],
      "ineffective": ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["water", "electric", "grass", "ground"],
      "ineffective": ["fire", "ice", "poison", "flying", "bug"],
      "immunes": []
    }
  },
  "ice": {
    "attack": {
      "effective": ["grass", "ground", "flying", "dragon"],
      "ineffective": ["fire", "water", "ice", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["ice"],
      "ineffective": ["fire", "fighting", "rock", "steel"],
      "immunes": []
    }
  },
  "fighting": {
    "attack": {
      "effective": ["normal", "ice", "rock", "dark", "steel"],
      "ineffective": ["poison", "flying", "psychic", "bug", "fairy"],
      "immunes": ["ghost"]
    },
    "defence": {
      "effective": ["bug", "rock", "dark"],
      "ineffective": ["flying", "psychic", "fairy"],
      "immunes": []
    }
  },
  "poison": {
    "attack": {
      "effective": ["grass", "fairy"],
      "ineffective": ["poison", "ground", "rock", "ghost"],
      "immunes": ["steel"]
    },
    "defence": {
      "effective": ["grass", "fighting", "poison", "bug", "fairy"],
      "ineffective": ["ground", "psychic"],
      "immunes": []
    }
  },
  "ground": {
    "attack": {
      "effective": ["fire", "electric", "poison", "rock", "steel"],
      "ineffective": ["grass", "bug"],
      "immunes": ["flying"]
    },
    "defence": {
      "effective": ["poison", "rock"],
      "ineffective": ["water", "grass", "ice"],
      "immunes": ["electric"]
    }
  },
  "flying": {
    "attack": {
      "effective": ["grass", "fighting", "bug"],
      "ineffective": ["electric", "rock", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["grass", "fighting", "bug"],
      "ineffective": ["electric", "ice", "rock"],
      "immunes": ["ground"]
    }
  },
  "psychic": {
    "attack": {
      "effective": ["fighting", "poison"],
      "ineffective": ["psychic", "steel"],
      "immunes": ["dark"]
    },
    "defence": {
      "effective": ["fighting", "psychic"],
      "ineffective": ["bug", "ghost", "dark"],
      "immunes": []
    }
  },
  "bug": {
    "attack": {
      "effective": ["grass", "psychic", "dark"],
      "ineffective": ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
      "immunes": []
    },
    "defence": {
      "effective": ["grass", "fighting", "ground"],
      "ineffective": ["fire", "flying", "rock"],
      "immunes": []
    }
  },
  "rock": {
    "attack": {
      "effective": ["fire", "ice", "flying", "bug"],
      "ineffective": ["fighting", "ground", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["normal", "fire", "poison", "flying"],
      "ineffective": ["water", "grass", "fighting", "ground", "steel"],
      "immunes": []
    }
  },
  "ghost": {
    "attack": {
      "effective": ["psychic", "ghost"],
      "ineffective": ["dark"],
      "immunes": ["normal"]
    },
    "defence": {
      "effective": ["normal", "fighting"],
      "ineffective": ["poison", "bug"],
      "immunes": ["ghost", "dark"]
    }
  },
  "dragon": {
    "attack": {
      "effective": ["dragon"],
      "ineffective": ["steel"],
      "immunes": ["fairy"]
    },
    "defence": {
      "effective": ["fire", "water", "electric", "grass"],
      "ineffective": ["ice", "dragon", "fairy"],
      "immunes": []
    }
  },
  "dark": {
    "attack": {
      "effective": ["psychic", "ghost"],
      "ineffective": ["fighting", "dark", "fairy"],
      "immunes": []
    },
    "defence": {
      "effective": ["ghost", "dark"],
      "ineffective": ["fighting", "bug", "fairy"],
      "immunes": ["psychic"]
    }
  },
  "steel": {
    "attack": {
      "effective": ["ice", "rock", "fairy"],
      "ineffective": ["fire", "water", "electric", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
      "ineffective": ["fire", "fighting", "ground"],
      "immunes": ["poison"]
    }
  },
  "fairy": {
    "attack": {
      "effective": ["fighting", "dragon", "dark"],
      "ineffective": ["fire", "poison", "steel"],
      "immunes": []
    },
    "defence": {
      "effective": ["fighting", "bug", "dark"],
      "ineffective": ["poison", "steel"],
      "immunes": ["dragon"]
    }
  }
}

export const types_color = {
  "normal": "#aba87c",
  "fire": "#ff7d3d",
  "water": "#5192ea",
  "electric": "#ffce4d",
  "grass": "#6ac75e",
  "ice": "#88d8d8",
  "fighting": "#cf2b2c",
  "poison": "#a8419d",
  "ground": "#e7be72",
  "flying": "#a692eb",
  "psychic": "#ff5687",
  "bug": "#a9b83e",
  "rock": "#bd9f47",
  "ghost": "#715895",
  "dragon": "#6740f1",
  "dark": "#73584a",
  "steel": "#b7b8ce",
  "fairy": "#fdc9e2"
}