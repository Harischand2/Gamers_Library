from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect, url_for
app = Flask(__name__)

#<iframe width="560" height="315" src="https://www.youtube.com/embed/fDLAFIhfFy4?si=zLGj1n4fTebPDTcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
data = {
    "1": {
        "id": "1",
        "title": "Grand Theft Auto V",
        "Trailer": {
            "videoId": "QkkoHAzjnUs",
            "si": "il-X53CGMY_SMSO3"
        },
        "summary": "Grand Theft Auto V, developed by Rockstar Games, is an action-adventure game set in the fictional state of San Andreas. Released in 2013, it features three protagonists involved in criminal activities. Renowned for its expansive open world, engaging storyline, and diverse gameplay, GTA V remains one of the best-selling and critically acclaimed games in the industry.",
        "year": '2013',
        "list_of_data": {
            "total_copies_sold": '1000000',
            "metacritic_rating": {"critics": '97', "users": '8.5'},
            "related_games": ["2", "3", "5", "6", "7", "8", "9", "10"]
        },
        'image': './static/gta5.jpg'

    },
    "2": {
        "id": "2",
        "title": "Valorant",
        "Trailer": {"videoId": "lWr6dhTcu-E", "si":"THDTqz8OgNG92P7u"},
        "summary": "Valorant, developed by Riot Games, is a tactical first-person shooter released in 2020. Known for its unique characters, each with distinct abilities, Valorant emphasizes strategic team-based gameplay. With a focus on precise gunplay and agent abilities, the game quickly gained popularity in the competitive esports scene.",
        "year": '2020',
        "list_of_data": {
            "total_copies_sold": '500000',
            "metacritic_rating": {"critics": '85', "users": '8.0'},
             "related_games": ["1", "3","5", "6", "7", "8", "9", "10"]
        },
        'image': './static/valorant.webp'
    },
    "3": {
        "id": "3",
        "title": "Fortnite",
        "Trailer": {"videoId": "WJW-bzXZM8M", "si":"E7uAHMIGsihvWuhS"},
        "summary": "Fortnite, developed by Epic Games, is a battle royale game that gained immense popularity since its release in 2017. With a cartoonish art style, it combines fast-paced action with building mechanics. The game's frequent updates, engaging events, and cross-platform play contribute to its widespread appeal, making it a cultural phenomenon among gamers of all ages.",
        "year": '2017',
        "list_of_data": {
            "total_copies_sold": '300000000',
            "metacritic_rating": {"critics": '88', "users": '8.5'},
             "related_games": ["1", "2", "5", "6", "7", "8", "9", "10"]
        },
        'image': './static/fortnite.jpeg'
    },
    "4": {
        "id": "4",
        "title": "Super Mario Bros",
        "Trailer": {"videoId": "dhrLoM6UqGI", "si":"wrSj4565aHUQSFQa"},
        "summary": "Super Mario Bros, developed by Nintendo, is a classic platformer released in 1985. It follows Mario as he embarks on a journey to rescue Princess Peach from the villainous Bowser. With its iconic characters, memorable soundtrack, and innovative level design, Super Mario Bros played a pivotal role in shaping the gaming industry.",
        "year": '1985',
        "list_of_data": {
            "total_copies_sold": '40000000',
            "metacritic_rating": {"critics": '100', "users": '9.0'},
            "related_games": ["1"]
        },
        'image': './static/super_mario_bros.avif'

    },
    "5": {
        "id": "5",
        "title": "Call of Duty 4: Modern Warfare",
        "Trailer": {"videoId": "LhuIjNSg7Gg", "si":"Xnha711HlYa9Fzh3"},
        "summary": "Call of Duty 4: Modern Warfare, developed by Infinity Ward, is a first-person shooter released in 2007. It marked a significant shift in the Call of Duty series, moving from World War II settings to a modern-day conflict. Praised for its intense single-player campaign and addictive multiplayer, Modern Warfare became a milestone in the FPS genre.",
        "year": '2007',
        "list_of_data": {
            "total_copies_sold": '15000000',
            "metacritic_rating": {"critics": '94', "users": '9.0'},
            "related_games": ["1", "2", "3", "4", "6", "7", "8"]
        },
        'image': './static/cod.jpeg'
        
    },
    "6": {
        "id": "6",
        "title": "Street Fighter",
       "Trailer": {"videoId": "0nFd7Iylj5A", "si":"IDFK7Fh1lRZlVpxr"},
        "summary": "Street Fighter, developed by Capcom, is a legendary fighting game franchise that debuted in arcades in 1987. Known for its iconic characters such as Ryu and Chun-Li, Street Fighter revolutionized the fighting game genre. With precise controls and competitive gameplay, it has become a staple in the competitive fighting game community.",
        "year": '1987',
        "list_of_data": {
            "total_copies_sold": '50000000',
            "metacritic_rating": {"critics": '92', "users": '8.5'},
            "related_games": ["9","10"]
        },
        'image': './static/street_fighter.jpeg'
    },
    "7": {
        "id": "7",
        "title": "Minecraft",
         "Trailer": {"videoId": "MmB9b5njVbA", "si":"VNcGd9leAFkYkDvY"},
        "summary": "Minecraft, created by Mojang, is a sandbox game that allows players to build and explore virtual worlds made up of blocks. Released in 2011, it became a cultural phenomenon with its limitless creative possibilities and player-driven content. Its pixelated aesthetic and open-ended gameplay appeal to a broad audience, making it one of the best-selling video games of all time.",
        "year": '2011',
        "list_of_data": {
            "total_copies_sold": '200000000',
            "metacritic_rating": {"critics": '93', "users": '9.0'},
            "related_games": ["1"]
        },
        'image': './static/minecraft.avif'
    },
    "8": {
        "id": "8",
        "title": "PUBG",
        "Trailer": {"videoId": "fDLAFIhfFy4", "si":"tmkxM3qlZWJU1YI7"},
        "summary": "PlayerUnknown's Battlegrounds (PUBG), developed by PUBG Corporation, is a battle royale game that gained immense popularity upon its release in 2017. Players compete to be the last one standing on an ever-shrinking map. PUBG's realistic approach and intense gameplay contributed to the rise of the battle royale genre.",
        "year": '2017',
        "list_of_data": {
            "total_copies_sold": '70000000',
            "metacritic_rating": {"critics": '89', "users": '8.0'},
            "related_games": ["1", "2", "3", "5", "6", "7", "9", "10"]
        },
        'image': './static/pubg.jpeg'
    },
    "9": {
        "id": "9",
        "title": "League of Legends",
        "Trailer": {"videoId": "-3aes7Vh8cc", "si":"PC51QMULqWx5IVmC"},
        "summary": "League of Legends, developed by Riot Games, is a multiplayer online battle arena (MOBA) game that debuted in 2009. With a vast roster of champions and strategic gameplay, League of Legends became a major player in the esports scene. Its regular updates and competitive nature contribute to its enduring popularity.",
        "year": '2009',
        "list_of_data": {
            "total_copies_sold": '0',  # As it is a free-to-play game
            "metacritic_rating": {"critics": '90', "users": '9.0'},
            "related_games": ["1", "2", "3", "4", "5", "6", "7", "8", "10"]
        },
        'image': './static/LOL.jpeg'
    },
    "10": {
        "id": "10",
        "title": "EA Sports UFC 4",
        "Trailer": {"videoId": "GjugTk9ovcI", "si":"S_SrVJW92rCrYLHN"},
        "summary": "EA Sports UFC 4, developed by EA Vancouver, is a mixed martial arts fighting game released in 2020. It features realistic graphics, a diverse roster of fighters, and engaging gameplay. With improvements in career mode and online features, UFC 4 continues to be a popular choice among MMA and gaming enthusiasts.",
        "year": '2020',
        "list_of_data": {
            "total_copies_sold": '2000000',
            "metacritic_rating": {"critics": '82', "users": '8.5'},
            "related_games": ["6", "9"]
        },
        'image': './static/ufc4.jpeg'
    }
}
current_index= len(data)




# ROUTES


@app.route('/')
def home():
   return render_template('home.html', data=data)   

@app.route('/add')
def add():
    return render_template('add.html', current_index=current_index, data=data)

@app.route('/add_result', methods=['POST'])
def add_result():
    global current_index
    global data
    current_index += 1
    json_data = request.get_json()
    game_name= json_data['title']
    v_id = json_data['Trailer']['videoId']
    si_ = json_data['Trailer']['si']
    summary_= json_data['summary']
    year_= json_data['year']
    total_copies_sold_= json_data['list_of_data']['total_copies_sold']
    critic_= json_data['list_of_data']['metacritic_rating']['critics']
    u_rating_= json_data['list_of_data']['metacritic_rating']['users']
    related_games_ = json_data['list_of_data']['related_games']
    image_ = json_data['image']
    new_data = {
        "id": str(current_index),
        "title": game_name,
        "Trailer": {"videoId": v_id, "si": si_},
        "summary": summary_,
        "year": year_,
        "list_of_data": {"total_copies_sold": total_copies_sold_,
                         "metacritic_rating": {"critics": critic_, "users": u_rating_},
                         "related_games": related_games_
                         },
        "image": image_
    }
    data[str(current_index)] = new_data
    print("Json data received: " ,  json_data)
    return jsonify(data_ ={"info_": data, "current_index_": current_index})



@app.route('/search_result', methods=['POST'])
def search_input():
   search_text = request.form.get('search_text', '').strip()
   
   num_or_not = search_text.isnumeric()
 
   if (len(search_text) == 0):
        return render_template('home.html', data=data)
   else:
        search_result=[]
        for i in data.values():
            hold_summar = i['summary'].strip().lower()
            if (not num_or_not) and (search_text.lower() in i['title'].lower() or search_text.lower() in hold_summar) :
                print("hi")
                search_result.append(i)
            else:
                 if (num_or_not) and (search_text in i['year']):
                    search_result.append(i)
            print("text : ", search_text.lower(),search_text.lower() in i['summary'])
            print("summary: ", i['summary'].lower())
            
        
        return render_template('search_result.html', search_text = search_text, search_result=search_result)

@app.route('/view/<element_id>')
def view(element_id):
    print("hi I am in view")
    current_element = data[element_id]
    return render_template('view.html', current_element=current_element, data=data)

@app.route('/edit/<element_id>')
def edit(element_id):
    current_element = data[element_id]
    return render_template('edit.html', current_element=current_element, data=data, current_index=current_index)

@app.route('/edit_data', methods=['POST', 'GET'])
def edit_data():
    print("hi I am in edit_data")
    global current_index
    global data
    json_data = request.get_json()
    g_id = json_data['id']
    game_name= json_data['title']
    v_id = json_data['Trailer']['videoId']
    si_ = json_data['Trailer']['si']
    summary_= json_data['summary']
    year_= json_data['year']
    total_copies_sold_= json_data['list_of_data']['total_copies_sold']
    critic_= json_data['list_of_data']['metacritic_rating']['critics']
    u_rating_= json_data['list_of_data']['metacritic_rating']['users']
    related_games_ = json_data['list_of_data']['related_games']
    image_ = json_data['image']
    new_data = {
        "id": str(g_id),
        "title": game_name,
        "Trailer": {"videoId": v_id, "si": si_},
        "summary": summary_,
        "year": year_,
        "list_of_data": {"total_copies_sold": total_copies_sold_,
                         "metacritic_rating": {"critics": critic_, "users": u_rating_},
                         "related_games": related_games_
                         },
        "image": image_
    }
    data[str(g_id)] = new_data
    view_url = url_for('view', element_id=str(g_id))
    return redirect(view_url)


if __name__ == '__main__':
   app.run(debug = True)




