var currentDayNumber = 2, 
currentDay = document.getElementById("currentDay");
currentDay.innerHTML = `Day ${currentDayNumber} Of 7`
var currentPageIndex = 0,
prevBtn = document.getElementById("prevBtn"),
nextBtn = document.getElementById("nextBtn");

/////   EMPTY TEMPLATE FOR PENDING
/*
{
  week : 0,
  weekStatus : {
    Investment_Status: "Pending...",
    Profit_Percent: "Pending...",
    Default_Capital: "$1,000",
    Total_Return: "Pending...",
    Profit_Made: "Pending..."
  },
  games : [
  {
    day_profit: "$45",
    game1 : {
      day : "Sunday 21 11 2021",
      league : "Mexico - Liga Apertura. 04:00",
      team1 : "Puebla",
      team2 : "Guadalajara-Chi",
      price : "$90",
      pick : "Over 1.5",
      odd : "1.5",
      game_status : "finished"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Not Needed",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
     league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Not Needed",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Monday 22 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
     league : "Japan, J. League 2.  05:00",
     team1 : "Team 1",
     team2 : "Team 2",
     price : "",
     pick : "Pending...",
     odd : "",
     game_status : "not-needed"
    },
    game3 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Tuesday 23 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Wednesday 24 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Thursday 25 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
      day : "Thursday 25 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Friday 26 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  },
  {
    day_profit: "$",
    game1 : {
      day : "Saturday 27 11 2021",
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game2 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    },
    game3 : {
      league : "Japan, J. League 2.  05:00",
      team1 : "Team 1",
      team2 : "Team 2",
      price : "",
      pick : "Pending...",
      odd : "",
      game_status : "not-needed"
    }
  }]
}
*/
/////   EMPTY TEMPLATE FOR PENDING


var allWeeksGames = [
  {
    week : 0,
    weekStatus : {
      Investment_Status: "Pending...",
      Profit_Percent: "Pending...",
      Default_Capital: "$1,000",
      Total_Return: "Pending...",
      Profit_Made: "Pending..."
    },
    games : [
    {
      day_profit: "$45",
      game1 : {
        day : "Sunday 21 11 2021",
        league : "Mexico - Liga Apertura. 04:00",
        team1 : "Puebla",
        team2 : "Guadalajara-Chi",
        price : "$90",
        pick : "Over 1.5",
        odd : "1.5",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
       league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Monday 22 11 2021",
        league : "Iran - Azadegan League.  11:45",
        team1 : "Arman Gohar",
        team2 : "Qashqai Shiraz",
        price : "$90",
        pick : "Over 1.5",
        odd : "1.5",
        game_status : "failed"
      },
      game2 : {
       league : "Slovenia - Prva Liga.  15:00",
       team1 : "NK Domzale",
       team2 : "NK Celje",
       price : "$240",
       pick : "Over 1.5 & 1/2",
       odd : "1.67",
       game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Tuesday 23 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Wednesday 24 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Thursday 25 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        day : "Thursday 25 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Friday 26 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$",
      game1 : {
        day : "Saturday 27 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Pending...",
        odd : "",
        game_status : "not-needed"
      }
    }]
  },
  {
    week : -1,
    weekStatus : {
      Investment_Status: "Completed",
      Profit_Percent: "39%",
      Default_Capital: "$1,000",
      Total_Return: "$1,393",
      Profit_Made: "$393"
    },
    games : [
    {
      day_profit: "$67.5",
      game1 : {
        day : "Sunday 14 11 2021",
        league : "Sweden, Ettan Norra.  17:00",
        team1 : "Assyriska FF",
        team2 : "Umea FC",
        price : "$90",
        pick : "Over 2.5 & 1/2",
        odd : "1.75",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
       league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$102",
      game1 : {
        day : "Monday 15 11 2021",
        league : "EItaly, Serie C. 17:30",
        team1 : "Turris",
        team2 : "Catanzaro",
        price : "$90",
        pick : "Over 2.5 & 1/2",
        odd : "1.7",
        game_status : "failed"
      },
      game2 : {
       league : "Uruguay, Primera Division.  20:30",
        team1 : "Progreso",
        team2 : "Montevideo",
        price : "240",
        pick : "Over 2.5 & 1/2",
        odd : "1.8",
        game_status : "finished"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$90",
      game1 : {
        day : "Tuesday 16 11 2021",
        league : "UEFA U21 Championship. 17:00",
        team1 : "Wales (u21)",
        team2 : "Switzerland (u21)",
        price : "$90",
        pick : "Over 2.5 & 1/2",
        odd : "1.7",
        game_status : "failed"
      },
      game2 : {
       league : "UEFA U21 Championship.  20:30",
        team1 : "Austria (u21)",
        team2 : "Croatia (u21)",
        price : "240",
        pick : "Over 2.5 & 1/2",
        odd : "1.75",
        game_status : "finished"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$30",
      game1 : {
        day : "Wednesday 17 11 2021",
        league : "Poland, 1. Division.  08:30",
        team1 : "Gremio Porto",
        team2 : "Fluminense",
        price : "$90",
        pick : "Over 2.5",
        odd : "1.8",
        game_status : "failed"
      },
      game2 : {
        league : "Qatar, Stars Cup.  23:10",
        team1 : "Al-Shamal",
        team2 : "Al Rayyan SC",
        price : "240",
        pick : "over 1.5 & 1/2",
        odd : "1.5",
        game_status : "finished"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$25",
      game1 : {
        day : "Thursday 18 11 2021",
        league : "Poland - 1. Division.  18:00",
        team1 : "Sandecja Nowy",
        team2 : "Czestochowa",
        price : "$90",
        pick : "over 1.5 & 1/2",
        odd : "1.6",
        game_status : "failed"
      },
      game2 : {
        league : "Sweden - 2 Division Norrland.  19:30",
        team1 : "Taftea IK",
        team2 : "Skelleftea FF",
        price : "$240",
        pick : "over 1.5 & 1/2",
        odd : "1.48",
        game_status : "finished"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$45",
      game1 : {
        day : "Friday 19 11 2021",
        league : "Egypt - Premier League.  14:00",
        team1 : "Pharco Fc",
        team2 : "El Makasa",
        price : "$90",
        pick : "over 1.5 & 1/2",
        odd : "1.5",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$34",
      game1 : {
        day : "Saturday 20 11 2021",
        league : "Colombia - Primera B.  02:00",
        team1 : "Fortaleza FC",
        team2 : "Llaneros",
        price : "$90",
        pick : "1/2",
        odd : "1.38",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    }]
  },
  {
    week : -2,
    weekStatus : {
      Investment_Status: "Completed",
      Profit_Percent: "40%",
      Default_Capital: "$1,000",
      Total_Return: "$1,400",
      Profit_Made: "$400"
    },
    games : [
      {
        day_profit: "$63",
        game1 : {
          day : "Saturday 06 11 2021",
          league : "Mexico, Liga MX Apertura.  04:00",
          team1 : "Mazatlan",
          team2 : "Guadalajara",
          price : "$90",
          pick : "Under 2.5",
          odd : "1.7",
          game_status : "finished"
        },
        game2 : {
          league : "Japan, J. League 2.  05:00",
          team1 : "Team 1",
          team2 : "Team 2",
          price : "",
          pick : "Not Needed",
          odd : "",
          game_status : "not-needed"
        },
        game3 : {
          league : "Japan, J. League 2.  05:00",
          team1 : "Team 1",
          team2 : "Team 2",
          price : "",
          pick : "Not Needed",
          odd : "",
          game_status : "not-needed"
        }
      },
      {
          day_profit: "$45",
          game1 : {
            day : "Friday 05 11 2021",
            league : "Romania, Liga I.  16:30",
            team1 : "Chindia",
            team2 : "Metan M.",
            price : "$90",
            pick : "Under 2.5",
            odd : "1.5",
            game_status : "finished"
          },
          game2 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
        },
          game3 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          }
        },
        {
          day_profit: "$62.1",
          game1 : {
            day : "Thursday 04 11 2021",
            league : "Spain, Laliga2.  19:00",
            team1 : "Burgos",
            team2 : "Zaragoza",
            price : "$90",
            pick : "Under 2.5",
            odd : "1.69",
            game_status : "finished"
          },
          game2 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          },
          game3 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          }
        },
        {
          day_profit: "$63",
          game1 : {
            day : "Wednesday 03 11 2021",
            league : "Chile, Primera Division.  22:30",
            team1 : "Huachipato",
            team2 : "U. Espanola",
            price : "$90",
            pick : "Under 2.5",
            odd : "1.7",
            game_status : "finished"
          },
          game2 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          },
          game3 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          }
        },
        {
          day_profit: "$56",
          game1 : {
            day : "Tuesday 02 11 2021",
            league : "Saudi Arabia, Division 1.  16:20",
            team1 : "Ohud Medina",
            team2 : "Khlood",
            price : "$90",
            pick : "Under 2.5",
            odd : "1.62",
            game_status : "finished"
          },
          game2 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          },
          game3 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          }
        },
        {
          day_profit: "$57.6",
          game1 : {
            day : "Monday 01 11 2021",
            league : "Spain, LaLiga.  16:00",
            team1 : "Alcorcon",
            team2 : "Ibiza",
            price : "$90",
            pick : "Under 2.5",
            odd : "1.64",
            game_status : "finished"
          },
          game2 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          },
          game3 : {
            league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
          }
        },
        {
        day_profit: "$54",
        game1 : {
          day : "Sunday 31 10 2021",
          league : "Portugal, Primeira Liga.  21:30",
          team1 : "Famalicao",
          team2 : "Vizela",
          price : "$90",
          pick : "Under 2.5",
          odd : "1.6",
          game_status : "finished"
        },
        game2 : {
          league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
        },
        game3 : {
          league : "Japan, J. League 2.  05:00",
            team1 : "Team 1",
            team2 : "Team 2",
            price : "",
            pick : "Not Needed",
            odd : "",
            game_status : "not-needed"
        }
      }]
  },
  {
    week : -3,
    weekStatus : {
      Investment_Status: "Completed",
      Profit_Percent: "40.5%",
      Default_Capital: "$1,000",
      Total_Return: "$1,405",
      Profit_Made: "$1,405"
    },
    games : [
    {
      day_profit: "$52.2",
      game1 : {
        day : "Saturday 30 10 2021",
        league : "Pakistan, Premier League.  11:00",
        team1 : "Karachi",
        team2 : "A. Authority",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.58",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Friday 29 10 2021",
        league : "Romania, Liga I.  18:30",
        team1 : "Botosani",
        team2 : "F. Constanta",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        day : "Sunday 07 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Blaublitz",
        team2 : "Tochigi",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.5",
        game_status : "finished"
      },
      game3 : {
        day : "Sunday 07 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Blaublitz",
        team2 : "Tochigi",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.5",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Thursday 28 10 2021",
        league : "Uruguay, Segunda Division.  21:15",
        team1 : "Espanol FC",
        team2 : "Racing Club",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$51.3",
      game1 : {
        day : "Wednesday 27 10 2021",
        league : "Italy, Serie B.  19:30",
        team1 : "Vicenza",
        team2 : "Monza",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.57",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$64.8",
      game1 : {
        day : "Tuesday 26 10 2021",
        league : "Oman, Omani League.  16:30",
        team1 : "Al-Ittihad Club",
        team2 : "Musannah",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.72",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Monday 25 10 2021",
        league : "Egypt, Premier League.  19:00",
        team1 : "Future FC",
        team2 : "Pharco FC",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$48.6",
      game1 : {
        day : "Sunday 24 10 2021",
        league : "Brazil, Brasileiro Serie A.  20:30",
        team1 : "Red Bull",
        team2 : "Sao Paulo",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.54",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    }]
  },
  {
    week : -4,
    weekStatus : {
      Investment_Status: "Completed",
      Profit_Percent: "42.6%",
      Default_Capital: "$1,000",
      Total_Return: "$1,426",
      Profit_Made: "$426"
    },
    games : [
    {
      day_profit: "$63",
      game1 : {
        day : "Saturday 23 10 2021",
        league : "Brazil, Brasileiro Seria A.  21:00",
        team1 : "Juventude",
        team2 : "Ceara",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Friday 22 10 2021",
        league : "Uganda, Premier League.  13:00",
        team1 : "Bright Stars",
        team2 : "Onduparaka",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$58.5",
      game1 : {
        day : "Thursday 21 10 2021",
        league : "Serbia, Superliga.  15:30",
        team1 : "Krusevac",
        team2 : "Novi Pazar",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.65",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Wednesday 20 10 2021",
        league : "Iran, Pro League.  15:30",
        team1 : "Esteghlal",
        team2 : "Havadar",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$54",
      game1 : {
        day : "Tuesday 19 10 2021",
        league : "South Afica, Premier League.  16:30",
        team1 : "Galaxy FC",
        team2 : "AmaZula",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.6",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$61.2",
      game1 : {
        day : "Monday 18 10 2021",
        league : "Uganda, Premier League.  14:00",
        team1 : "Gadaffi FC",
        team2 : "Busoga United",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.68",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Sunday 17 10 2021",
        league : "Oman, Omani League.  17:10",
        team1 : "Oman Club",
        team2 : "Bahla Club",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    }]
  },
  {
    week : -5,
    weekStatus : {
      Investment_Status: "Completed",
      Profit_Percent: "40.7%",
      Default_Capital: "$1,000",
      Total_Return: "$1,407",
      Profit_Made: "$407"
    },
    games : [
    {
      day_profit: "$54",
      game1 : {
        day : "Sunday 07 11 2021",
        league : "Japan, J. League 2.  05:00",
        team1 : "Blaublitz",
        team2 : "Tochigi",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.6",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
       league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$60",
      game1 : {
        day : "Monday 08 11 2021",
        league : "Venezuela, Primera Division II.  01:00",
        team1 : "Deportivo Lara",
        team2 : "La Guaira",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.67",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$58",
      game1 : {
        day : "Tuesday 09 11 2021",
        league : "England, Fa Cup. 03:45",
        team1 : "Dagenham",
        team2 : "Salford City",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.5",
        game_status : "finished"
      },
      game2 : {
       league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Wednesday 10 11 2021",
        league : "Brazil, Brasileiro Serie A.  08:30",
        team1 : "Gremio Porto",
        team2 : "Fluminense",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$50",
      game1 : {
        day : "Thursday 11 11 2021",
        league : "International, Friendly.  01:00",
        team1 : "Kosovo",
        team2 : "Jordan",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.56",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$63",
      game1 : {
        day : "Friday 12 11 2021",
        league : "Iran, Pro League.  20:30",
        team1 : "Paykan FC",
        team2 : "Zob Isfahan",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.7",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    },
    {
      day_profit: "$59.4",
      game1 : {
        day : "Saturday 13 11 2021",
        league : "Saudi Arabia, Division 1.  20:30",
        team1 : "Ohud Medina",
        team2 : "AL Qadisiyah",
        price : "$90",
        pick : "Under 2.5",
        odd : "1.66",
        game_status : "finished"
      },
      game2 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      },
      game3 : {
        league : "Japan, J. League 2.  05:00",
        team1 : "Team 1",
        team2 : "Team 2",
        price : "",
        pick : "Not Needed",
        odd : "",
        game_status : "not-needed"
      }
    }]
  }
]


function constructor(){
  var weekGames = [];
  var weekStatus = {};
  allWeeksGames.forEach(perWeek => {
    if(perWeek.week === 0){
        weekGames = perWeek.games;
        weekStatus = perWeek.weekStatus;
      }
    });

    var counter = 0,
    dayGamesDivs = document.querySelectorAll(".game-box"),
    weekResultDiv = document.querySelector(".week-result"),
    perDayGames = weekGames[counter];

    dayGamesDivs.forEach(element => {
      element.innerHTML = `
          <div class="game-date reduce-padding">${perDayGames.game1.day}</div>
          <div class="game-league">${perDayGames.game1.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game1.team1}</p>
              <p>${perDayGames.game1.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game1.price}</p>
              <p class="${perDayGames.game1.game_status}">${perDayGames.game1.pick}</p>
              <p>${perDayGames.game1.odd}</p>
          </div>
                
          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game2.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game2.team1}</p>
              <p>${perDayGames.game2.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game2.price}</p>
              <p class="${perDayGames.game2.game_status}">${perDayGames.game2.pick}</p>
              <p>${perDayGames.game2.odd}</p>
          </div>

          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game3.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game3.team1}</p>
              <p>${perDayGames.game3.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game3.price}</p>
              <p class="${perDayGames.game3.game_status}">${perDayGames.game3.pick}</p>
              <p>${perDayGames.game3.odd}</p>
          </div>
          <div class="daily-profit">
              <p style="border: none;">Profit Made Today: <span>${perDayGames.day_profit}</span></p>
          </div>`;
          counter++;
          perDayGames = weekGames[counter];
    });
    weekResultDiv.innerHTML = `
      <p class="week-summary"><u>WEEK SUMMARY</u></p>
      <p>Investment Status: <span>${weekStatus.Investment_Status}</span></p>
      <p>Profit Percent: <span>${weekStatus.Profit_Percent} of the capital</span></p>
      <p>Default Capital: <span>${weekStatus.Default_Capital}</span></p>
      <p>Total Return: <span>${weekStatus.Total_Return}</span></p>
      <p>Profit Made: <span>${weekStatus.Profit_Made}</span></p>`;
}
constructor();




function displayCurrentDayLabel() {
    if(currentPageIndex === 0){
      currentDay.style.opacity = 1;
    } else {
      currentDay.style.opacity = 0;
    }
}
function onPrev(){
  if(currentPageIndex > -5){
    nextBtn.style.opacity = 1;
    currentPageIndex = currentPageIndex - 1;
    displayCurrentDayLabel();
  }
  currentPageIndex == -5? currentPageIndex = -4 : "";
  
  if(currentPageIndex === -4){
    prevBtn.style.opacity = "0";
  }
  if(currentPageIndex > -5){
    var weekGames = [];
    var weekStatus = {};
    allWeeksGames.forEach(perWeek => {
      if(perWeek.week === currentPageIndex){
        weekGames = perWeek.games;
        weekStatus = perWeek.weekStatus;
      }
    });

    var counter = 0,
    dayGamesDivs = document.querySelectorAll(".game-box"),
    weekResultDiv = document.querySelector(".week-result"),
    perDayGames = weekGames[counter];

    dayGamesDivs.forEach(element => {
      element.innerHTML = `
          <div class="game-date reduce-padding">${perDayGames.game1.day}</div>
          <div class="game-league">${perDayGames.game1.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game1.team1}</p>
              <p>${perDayGames.game1.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game1.price}</p>
              <p class="${perDayGames.game1.game_status}">${perDayGames.game1.pick}</p>
              <p>${perDayGames.game1.odd}</p>
          </div>
                
          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game2.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game2.team1}</p>
              <p>${perDayGames.game2.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game2.price}</p>
              <p class="${perDayGames.game2.game_status}">${perDayGames.game2.pick}</p>
              <p>${perDayGames.game2.odd}</p>
          </div>

          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game3.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game3.team1}</p>
              <p>${perDayGames.game3.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game3.price}</p>
              <p class="${perDayGames.game3.game_status}">${perDayGames.game3.pick}</p>
              <p>${perDayGames.game3.odd}</p>
          </div>
          <div class="daily-profit">
          <p style="border: none;">Profit Made Today: <span>${perDayGames.day_profit}</span></p>
          </div>`;
          counter++;
          perDayGames = weekGames[counter];
    });
    weekResultDiv.innerHTML = `
      <p class="week-summary"><u>WEEK SUMMARY</u></p>
      <p>Investment Status: <span>${weekStatus.Investment_Status}</span></p>
      <p>Profit Percent: <span>${weekStatus.Profit_Percent} of the capital</span></p>
      <p>Default Capital: <span>${weekStatus.Default_Capital}</span></p>
      <p>Total Return: <span>${weekStatus.Total_Return}</span></p>
      <p>Profit Made: <span>${weekStatus.Profit_Made}</span></p>`;
  }
}
function onNext(){
  if(currentPageIndex < 0){
    prevBtn.style.opacity = "1";
    currentPageIndex = currentPageIndex + 1;
    displayCurrentDayLabel();
  }
  if(currentPageIndex === 0){
    nextBtn.style.opacity = "0";
  }
  if(currentPageIndex < 1){
    var weekGames = [];
    allWeeksGames.forEach(perWeek => {
      if(perWeek.week === currentPageIndex){
        weekGames = perWeek.games;
        weekStatus = perWeek.weekStatus;
      }
    });

    var counter = 0,
    dayGamesDivs = document.querySelectorAll(".game-box"),
    weekResultDiv = document.querySelector(".week-result"),
    perDayGames = weekGames[counter];

    dayGamesDivs.forEach(element => {
      element.innerHTML = `
          <div class="game-date reduce-padding">${perDayGames.game1.day}</div>
          <div class="game-league">${perDayGames.game1.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game1.team1}</p>
              <p>${perDayGames.game1.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game1.price}</p>
              <p class="${perDayGames.game1.game_status}">${perDayGames.game1.pick}</p>
              <p>${perDayGames.game1.odd}</p>
          </div>
                
          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game2.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game2.team1}</p>
              <p>${perDayGames.game2.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game2.price}</p>
              <p class="${perDayGames.game2.game_status}">${perDayGames.game2.pick}</p>
              <p>${perDayGames.game2.odd}</p>
          </div>

          <div class="other-game reduce-padding"></div>
          <div class="game-league">${perDayGames.game3.league}</div>
          <div class="teams-box">
              <p>${perDayGames.game3.team1}</p>
              <p>${perDayGames.game3.team2}</p>
          </div>
          <div class="game-box-footer">
              <p>${perDayGames.game3.price}</p>
              <p class="${perDayGames.game3.game_status}">${perDayGames.game3.pick}</p>
              <p>${perDayGames.game3.odd}</p>
          </div>
          <div class="daily-profit">
          <p style="border: none;">Profit Made Today: <span>${perDayGames.day_profit}</span></p>
          </div>`;
          counter++;
          perDayGames = weekGames[counter];
    });
    weekResultDiv.innerHTML = `
      <p class="week-summary"><u>WEEK SUMMARY</u></p>
      <p>Investment Status: <span>${weekStatus.Investment_Status}</span></p>
      <p>Profit Percent: <span>${weekStatus.Profit_Percent} of the capital</span></p>
      <p>Default Capital: <span>${weekStatus.Default_Capital}</span></p>
      <p>Total Return: <span>${weekStatus.Total_Return}</span></p>
      <p>Profit Made: <span>${weekStatus.Profit_Made}</span></p>`;
  }
} 
