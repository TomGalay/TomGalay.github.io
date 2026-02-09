var slash_sfx = document.createElement("audio");
slash_sfx.src = "assets/sfx/slash.wav";
slash_sfx.volume = 0.7;
slash_sfx.autoPlay = false;
slash_sfx.preLoad = true;
slash_sfx.controls = true;
var rend_sfx = document.createElement("audio");
rend_sfx.src = "assets/sfx/rend.wav";
rend_sfx.volume = 0.8;
var rend2_sfx = document.createElement("audio");
rend2_sfx.src = "assets/sfx/rend2.wav";
rend2_sfx.volume = 0.8;
var overpower1_sfx = document.createElement("audio");
overpower1_sfx.src = "assets/sfx/overpower1.wav";
overpower1_sfx.volume = 0.7;
var overpower2_sfx = document.createElement("audio");
overpower2_sfx.src = "assets/sfx/overpower2.mp3";
overpower2_sfx.volume = 0.75;
var shield1_sfx = document.createElement("audio");
shield1_sfx.src = "assets/sfx/shield1.wav";
shield1_sfx.volume = 0.75;
var shield2_sfx = document.createElement("audio");
shield2_sfx.src = "assets/sfx/shield2.mp3";
shield2_sfx.volume = 0.75;
var heal1_sfx = document.createElement("audio");
heal1_sfx.src = "assets/sfx/heal1.wav";
heal1_sfx.volume = 1;
var heal2_sfx = document.createElement("audio");
heal2_sfx.src = "assets/sfx/heal2.mp3";
heal2_sfx.volume = 1;

var damaged_sfx = document.createElement("audio");
damaged_sfx.src = "assets/sfx/damaged.wav";
damaged_sfx.volume = 1;

var explode_sfx = document.createElement("audio");
explode_sfx.src = "assets/sfx/explode.wav";
explode_sfx.volume = 1;

var loader_bgm = document.createElement("audio");
loader_bgm.src = "assets/bgm/rebirth.mp3";
loader_bgm.volume = 1;

/*var fight1_bgm = document.createElement("audio");
fight1_bgm.src = "assets/bgm/close_combat.mp3";
fight1_bgm.volume = 1;
var fight2_bgm = document.createElement("audio");
fight2_bgm.src = "assets/bgm/outnumbered.mp3";
fight2_bgm.volume = 1;
var fight3_bgm = document.createElement("audio");
fight3_bgm.src = "assets/bgm/internal_conflict.mp3";
fight3_bgm.volume = 1;
var fight4_bgm = document.createElement("audio");
fight4_bgm.src = "assets/bgm/final_encounter.mp3";
fight4_bgm.volume = 1;
var fight5_bgm = document.createElement("audio");
fight5_bgm.src = "assets/bgm/heroic_confrontation_v2.mp3";
fight5_bgm.volume = 1;
var fight6_bgm = document.createElement("audio");
fight6_bgm.src = "assets/bgm/final_encounter_v2.mp3";
fight6_bgm.volume = 1;*/
var normal_bgm = document.createElement("audio");
var boss_bgm = document.createElement("audio");

var loading_bgm = document.createElement("audio");
loading_bgm.src = "assets/bgm/rebirth.mp3";
loading_bgm.volume = 1;

var stage_1_monsters = [
    "Smug Bunny",
    "Sword Owl",
    "Evil Boar"
]

var stage_2_monsters = [
    "Gobsnob",
    "Possessed Shaman",
    "Charge Knight",
]

var stage_3_monsters = [
    "The Trickster",
    "Sovereign of Fire",
    "Dragon Emperor"
]

var stage_1_monsters_dir = [
    "assets/character_sprites/rabbit.png",
    "assets/character_sprites/owl.png",
    "assets/character_sprites/wildbeast.png"
]

var stage_2_monsters_dir = [
    "assets/character_sprites/gobsnob.png",
    "assets/character_sprites/shaman.png",
    "assets/character_sprites/armor.png"
]

var stage_3_monsters_dir = [
    "assets/character_sprites/shade.png",
    "assets/character_sprites/ifrit.png",
    "assets/character_sprites/dragongod.png"
]

var stage_1_monsters_class = [
    "rabbit",
    "owl",
    "wildbeast"
]

var stage_2_monsters_class = [
    "gobsnob",
    "shaman",
    "armor"
]

var stage_3_monsters_class = [
    "shade",
    "ifrit",
    "dragongod"
]

var stage_bg = [
    "url(assets/BG/battleback1.png)",
    "url(assets/BG/battleback2.png)",
    "url(assets/BG/battleback3.png)"
]

$(document).ready(function () {
	
    story_line1.innerHTML = "Once upon a time...";
    story_line2.innerHTML = "the world was in an era of peace and prosperity";
    story_line3.innerHTML = "people lived with smiles in their face and hopes for their children";
    $('#story_line1').fadeIn(3000).delay(2000).fadeOut(2000);
    $('#story_line2').fadeIn(4000).delay(1000).fadeOut(2000);
    $('#story_line3').fadeIn(5000).fadeOut(2000);
    setTimeout(function () {
        story_line1.innerHTML = "One day, a huge portal appeared out from nowhere";
        story_line2.innerHTML = "monsters started appearing";
        story_line3.innerHTML = "Everyone was in despair until...";
        $('#story_line1').fadeIn(3000).delay(2000).fadeOut(2000);
        $('#story_line2').fadeIn(4000).delay(1000).fadeOut(2000);
        $('#story_line3').fadeIn(5000).fadeOut(2000);
    }, 7000);

    setTimeout(function () {
        story_line1.innerHTML = "a knight in griffin headgear was heard roaming the lands";
        story_line2.innerHTML = "The knight was slaying monsters left and right";
        story_line3.innerHTML = "He was the only hope left for the world";
        story_line4.innerHTML = "-Er, the wandering knight";
        $('#story_line1').fadeIn(3000).delay(2000).fadeOut(2000);
        $('#story_line2').fadeIn(4000).delay(1000).fadeOut(2000);
        $('#story_line3').fadeIn(5000).fadeOut(2000);
        $('#story_line4').delay(4000).fadeIn(1000).fadeOut(2000);

    }, 14000);
});

function fadeout_Music(v_sound) {
    setTimeout(function () {
        v_sound.volume = 0.75;
    }, 250);
    setTimeout(function () {
        v_sound.volume = 0.50;
    }, 500);
    setTimeout(function () {
        v_sound.volume = 0.25;
    }, 750);
    setTimeout(function () {
        v_sound.volume = 0;
    }, 1000);
    setTimeout(function () {
        v_sound.pause();
    }, 1100);
}

function playMusic(v_sound, volume) {
    v_sound.volume = volume;
    v_sound.play();
}

function music() {
    if (stage_num == 1 && battle_num != 3) {
        if (isPlaying(boss_bgm)) {
            fadeout_Music(boss_bgm);
        }
        if (!isPlaying(normal_bgm)) {
            setTimeout(function () {
                normal_bgm = document.createElement("audio");
                normal_bgm.src = "assets/bgm/close_combat.mp3";
                playMusic(normal_bgm, 0.85);
            }, 1100)
        }

    } else if (stage_num == 1 && battle_num == 3) {
        if (isPlaying(normal_bgm)) {
            fadeout_Music(normal_bgm);
        }
        setTimeout(function () {
            boss_bgm = document.createElement("audio");
            boss_bgm.src = "assets/bgm/final_encounter.mp3";
            playMusic(boss_bgm, 1);
        }, 10)
    } else if (stage_num == 2 && battle_num != 3) {
        if (isPlaying(boss_bgm)) {
            fadeout_Music(boss_bgm);
        }
        if (!isPlaying(normal_bgm)) {
            setTimeout(function () {
                normal_bgm = document.createElement("audio");
                normal_bgm.src = "assets/bgm/outnumbered.mp3";
                playMusic(normal_bgm, 0.85);
            }, 1100)
        }

    } else if (stage_num == 2 && battle_num == 3) {
        if (isPlaying(normal_bgm)) {
            fadeout_Music(normal_bgm);
        }
        setTimeout(function () {
            boss_bgm = document.createElement("audio");
            boss_bgm.src = "assets/bgm/heroic_confrontation_v2.mp3";
            playMusic(boss_bgm, 1);
        }, 10)
    } else if (stage_num == 3 && battle_num != 3) {
        if (isPlaying(boss_bgm)) {
            fadeout_Music(boss_bgm);
        }
        if (!isPlaying(normal_bgm)) {
            setTimeout(function () {
                normal_bgm = document.createElement("audio");
                normal_bgm.src = "assets/bgm/internal_conflict.mp3";
                playMusic(normal_bgm, 0.85);
            }, 1100)
        }

    } else if (stage_num == 3 && battle_num == 3) {
        if (isPlaying(normal_bgm)) {
            fadeout_Music(normal_bgm);
        }
        setTimeout(function () {
            boss_bgm = document.createElement("audio");
            boss_bgm.src = "assets/bgm/final_encounter_v2.mp3";
            playMusic(boss_bgm, 1);
        }, 10)
    }

}

function isPlaying(v_sound) {
    return !v_sound.paused;
}

//give golds
var curr_gold = 0;

function goldGeneration() {
    curr_gold += 1;
    p_gold.innerHTML = curr_gold;
}

setInterval(goldGeneration, 1000);

$(document).one("keypress", function (e) {
    if (e.keyCode == 32) {
		$('.loader').fadeOut(4000);
        battle();
    }
});

var xp_required = 0;

function xp_requirement() {
    //pokemon level scaling - hahah
    /*return Math.ceil((4 * Math.pow(user.level, 3)) / 5);*/
    return 25 + (25 * user.level * user.level - 25 * user.level);
}

class player {
    constructor() {
        this.name = "Elijah";
        this.level = 1;
        this.xp = 0;
        this.maxhp = 200;
        this.hp = this.maxhp;
        this.maxmp = 100;
        this.mp = this.maxmp;
        this.atk = 50;
        this.def = 1;
        this.bonus_atk = 0;
        this.bonus_def = 0;
        this.defend_duration = 0;
        p_name.innerHTML = this.name;
        p_lvl.innerHTML = this.level;
        p_xp.innerHTML = this.xp;
        p_maxhp.innerHTML = this.maxhp;
        p_hp.innerHTML = this.hp;
        p_maxmp.innerHTML = this.maxmp;
        p_mp.innerHTML = this.mp;
        p_atk.innerHTML = this.atk;
        p_def.innerHTML = this.def;
    }
    alive() {
        if (this.hp > 0)
            return true;
        return false;
    }
    attack() {
        var p_damage = Math.floor(Math.random() * (this.atk * 2)) + (this.atk * 2);
        p_damage = Math.ceil(p_damage * (100 / (100 + enemy.def)));
        player_damage.innerHTML = p_damage;
        return p_damage;
    }
    defend() {
        this.bonus_def = 20;
        this.defend_duration = 3;
        p_def.innerHTML = this.def + this.bonus_def;
    }
    rend() {
        var p_damage = Math.floor(Math.random() * (this.atk * 2)) + (this.atk * 1);
        p_damage = Math.ceil(p_damage * (100 / (100 + enemy.def)));
        player_damage.innerHTML = p_damage;
        return p_damage;
    }
    overpower() {
        var p_damage = Math.floor(Math.random() * (this.atk * 4)) + (this.atk * 4);
        p_damage = Math.ceil(p_damage * (100 / (100 + enemy.def)));
        player_damage.innerHTML = p_damage;
        return p_damage;
    }
    heal() {
        var heal = (this.maxhp * 0.75) + Math.floor(Math.random() * (this.maxhp * 0.25));
        heal = Math.ceil(heal);
        return heal;
    }
    damaged(damage) {
        this.hp -= damage;
        p_hp.innerHTML = this.hp;
    }
    animate_attack() {
        $("#player_box").animate({
            left: '200px'
        }).delay(1000).animate({
            left: '0px'
        });

        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_attack2",
                "background-position-y": "0px"
            });
            slash_sfx.play();
        }, 500)
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });
        }, 1000);
    }
    animate_attack2() {
        $("#player_box").animate({
            left: '200px'
        }).delay(1000).animate({
            left: '0px'
        });
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_attack2",
                "background-position-y": "-1032px"
            });

        }, 500)
        setTimeout(function () {
            rend_sfx.play();
            rend2_sfx.play();
        }, 800);
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });
        }, 1000);
    }
    animate_attack3() {
        $("#player_box").animate({
            left: '200px'
        }).delay(1000).animate({
            left: '0px'
        });
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_attack2",
                "background-position-y": "-516px"
            });

        }, 500)
        setTimeout(function () {
            overpower2_sfx.play();
        }, 600);
        setTimeout(function () {
            overpower1_sfx.play();
        }, 800);
        setTimeout(function () {
            overpower2_sfx.pause();
            overpower2_sfx.currentTime = 0;
            overpower1_sfx.pause();
            overpower1_sfx.currentTime = 0;
        }, 2000);
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });

        }, 1000);
    }
    animate_heal() {
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_attack2",
                "background-position-y": "-2064px"
            });

        }, 500)
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });

        }, 1000);

        setTimeout(function () {
            heal1_sfx.play();
        }, 600);
        setTimeout(function () {
            heal2_sfx.play();
        }, 1400);

        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_attack2",
                "background-position-y": "-1548px"
            });

        }, 1500)
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });

        }, 2000);

    };
    animate_defend() {
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "-1548px"
            });

        }, 500)
        setTimeout(function () {
            shield1_sfx.play();
        }, 500);
        setTimeout(function () {
            shield2_sfx.play();
        }, 700);
        setTimeout(function () {
            $('#user').css({
                "animation-name": "chara_idle",
                "background-position-y": "0px"
            });

        }, 1000);

    };
    animate_damage() {
        $('#player_box').toggleClass('animated');
        setTimeout(function () {
            $('#player_box').removeClass('animated');
        }, 500);
    }
    applyChange() {
        var a = this.hp * (100 / this.maxhp);
        $(".health-bar-text").html(Math.round(a) + "%");
        $(".health-bar-red").animate({
            'width': a + "%"
        }, 700);
        $(".health-bar").animate({
            'width': a + "%"
        }, 500);
        $('.total').html(this.hp + "/" + this.maxhp);
    }
    applyChange_mana() {
        var a = this.mp * (100 / this.maxmp);
        $(".mana-bar-text").html(Math.round(a) + "%");
        $(".mana-bar-red").animate({
            'width': a + "%"
        }, 700);
        $(".mana-bar").animate({
            'width': a + "%"
        }, 500);
        $('.total').html(this.mp + "/" + this.maxmp);
    }
    tooltip_change() {
        slash_max.innerHTML = Math.ceil((this.atk * 6) * (100 / (100 + enemy.def)));
        slash_min.innerHTML = Math.ceil((this.atk * 2) * (100 / (100 + enemy.def)));
        rend_max.innerHTML = Math.ceil((this.atk * 2) * (100 / (100 + enemy.def)));
        rend_min.innerHTML = Math.ceil((this.atk * 1) * (100 / (100 + enemy.def)));
        overpower_max.innerHTML = Math.ceil((this.atk * 12) * (100 / (100 + enemy.def)));
        overpower_min.innerHTML = Math.ceil((this.atk * 6) * (100 / (100 + enemy.def)));
    }
}

class monster {
    constructor(level) {
        this.name = "Box Monster";
        this.level = level;
        this.maxhp;
        this.atk;
        this.def = this.level;
        //this.maxhp = Math.ceil(1000 * (1 + Math.pow((this.level), 2) * 0.15));
        if (this.level < 10) {
            this.maxhp = this.level * 250;
            this.atk = 10 + ((this.level - 1) * 10);
        } else if (this.level == 10) {
            this.maxhp = 5000;
            this.atk = 250;
            this.def = 50;
        } else if (this.level > 10 && this.level < 20) {
            this.maxhp = this.level * 275;
            this.atk = 10 + ((this.level - 1) * 15);
        } else if (this.level == 20) {
            this.maxhp = 10000;
            this.atk = 500;
            this.def = 50;
        } else if (this.level > 20 && this.level < 30) {
            this.maxhp = this.level * 300;
            this.atk = 10 + ((this.level - 1) * 20);
        } else if (this.level == 30) {
            this.maxhp = 25000;
            this.atk = 1000;
            this.def = 50;
        }
        this.hp = this.maxhp;
        //this.atk = Math.ceil((Math.floor(Math.random() * 50) + 50) * (1 + Math.pow((this.level), 2) * 0.27)); = this.level
        //this.def = Math.ceil((Math.floor(Math.random() * 50) + 50) * (1 + Math.pow((this.level), 2) * 0.05));
        e_name.innerHTML = this.name;
        e_lvl.innerHTML = this.level;
        e_maxhp.innerHTML = this.maxhp;
        e_hp.innerHTML = this.hp;
        e_atk.innerHTML = this.atk;
        e_def.innerHTML = this.def;
        //for attack animation
        this.monster_class = "";
    }
    alive() {
        if (this.hp > 0)
            return true;
        return false;
    }
    attack() {
        var e_damage = Math.floor(Math.random() * (this.atk * 2)) + (this.atk * 2);
        e_damage = Math.ceil(e_damage * (100 / (100 + user.def)));
        enemy_damage.innerHTML = e_damage;
        return e_damage;
    }
    defend() {
        return Math.floor(Math.random() * (this.def * 1)) + (this.def * 0.5);
    }
    damaged(damage) {
        this.hp -= damage;
        e_hp.innerHTML = this.hp;
    }
    animate_attack() {
        var a = this.monster_class + "_attack"
        var b = this.monster_class + "_idle"

        $('#sprite_object').css({
            "animation-name": a,
            "background-position-y": "0px"
        });

        setTimeout(function () {
            $('#sprite_object').css({
                "animation-name": b,
                "background-position-y": "0px"
            });
        }, 1000);


        setTimeout(function () {
            user.animate_damage();
            $('#e_div').toggleClass('damage-show');
            $("#w_e_div").animate({
                top: '25%'
            }).delay(500).animate({
                top: '35%'
            });
            setTimeout(function () {
                $('#e_div').removeClass('damage-show');
            }, 1000);
            $('#e_div').fadeIn(750).fadeOut(250);
        }, 500)

    }
    animate_damage() {
        $('#enemy_box').toggleClass('animated');
        setTimeout(function () {
            $('#enemy_box').removeClass('animated');
        }, 500);
    }
    applyChange() {
        var a = this.hp * (100 / this.maxhp);
        $('.e-health-bar-text').html(Math.round(a) + "%");
        $('.e-health-bar-red').animate({
            'width': a + "%"
        }, 700);
        $('.e-health-bar').animate({
            'width': a + "%"
        }, 500);
        $('.total').html(this.hp + "/" + this.maxhp);
    }
}
var user = new player();
user.applyChange();
user.applyChange_mana();
var enemy;
var user_turn = 0;
var stage_num = 1; //default 1
var battle_num = 0;
var stage_max_lvl = [
    1, 10, 20, 30
]
xp_required = xp_requirement();
p_reqxp.innerHTML = xp_required;

function spawn() {
    music();
    //randomize level
    /*var spawn_level = Math.floor(Math.random() * (user.level % 10)) + stage_max_lvl[stage_num - 1];
    if (spawn_level > stage_max_lvl[stage_num]) {
        spawn_level = stage_max_lvl[stage_num];
    }*/

    //matches monster level with user level (min. is min stage level)
    var spawn_level = user.level;
    if (spawn_level < stage_max_lvl[stage_num - 1]) {
        spawn_level = stage_max_lvl[stage_num - 1];
    }
    else if (user.level>stage_max_lvl[stage_num]){
        spawn_level = stage_max_lvl[stage_num];
    }

    if (battle_num == 3) {
        if (stage_num == 1) {
            spawn_level = 10;
        } else if (stage_num == 2) {
            spawn_level = 20;
        } else if (stage_num == 3) {
            spawn_level = 30;
        }
    }
    enemy = new monster(spawn_level);
    if (stage_num == 1) {

        enemy.name = stage_1_monsters[battle_num - 1];
        //for animation
        enemy.monster_class = stage_1_monsters_class[battle_num - 1];
        document.getElementById("sprite_object").className = stage_1_monsters_class[battle_num - 1];
        if (battle_num == 1) {
            $('.box-player').css({
                "top": "50%",
                "left": "22%"
            });
        } else if (battle_num == 2) {
            $('.box-player').css({
                "top": "45%",
                "left": "23%"
            });
        } else if (battle_num == 3) {
            $('.box-player').css({
                "top": "40%",
                "left": "5%"
            });
        }

    } else if (stage_num == 2) {
        enemy.name = stage_2_monsters[battle_num - 1];
        //for animation
        enemy.monster_class = stage_2_monsters_class[battle_num - 1];
        document.getElementById("sprite_object").className = stage_2_monsters_class[battle_num - 1];
        if (battle_num == 1) {
            $('.box-player').css({
                "top": "53%",
                "left": "30%"
            });
        } else if (battle_num == 2) {
            $('.box-player').css({
                "top": "45%",
                "left": "10%"
            });
        } else if (battle_num == 3) {
            $('.box-player').css({
                "top": "35%",
                "left": "15%"
            });
        }
    } else if (stage_num == 3) {
        enemy.name = stage_3_monsters[battle_num - 1];
        //for animation
        enemy.monster_class = stage_3_monsters_class[battle_num - 1];
        document.getElementById("sprite_object").className = stage_3_monsters_class[battle_num - 1];
        if (battle_num == 1) {
            $('.box-player').css({
                "top": "40%",
                "left": "20%"
            });
        } else if (battle_num == 2) {
            $('.box-player').css({
                "top": "-3%",
                "left": "0%"
            });
        } else if (battle_num == 3) {
            $('.box-player').css({
                "top": "0%",
                "left": "0%"
            });
        }
    }
    var enemy_start_anim = enemy.monster_class + "_idle"
    $('#sprite_object').css({
        "animation-name": enemy_start_anim,
        "background-position-y": "0px"
    });
    enemy.applyChange();
    e_name.innerHTML = enemy.name;
    user.tooltip_change();
}

function battle() {
    battle_num++;
    if (battle_num > 3) {
        battle_num = 1;
        stage_num++;
        $('.battleground').css({
            "background-image": stage_bg[stage_num - 1]
        });
    }
    battle_no.innerHTML = battle_num;
    stage_no.innerHTML = stage_num;
    user_turn = 0;
    spawn();
}

/*var xp_scale = [
[64, 512, 4096],
[1024, 2048, 16384],
[4096, 8192, 32768]
]*/


var xp_scale = [
[32, 256, 2048],
[1024, 4096, 16384],
[4096, 8192, 32768]
]
var xp;

function gain_xp() {
    /*var xp = Math.ceil((xp_scale[stage_num - 1][battle_num - 1] * enemy.level) / 7);*/


    if (enemy.level < 10) {
        xp = enemy.level * 75;
    } else if (enemy.level > 10 && enemy.level < 20) {
        xp = enemy.level * 150;
    } else if (this.level > 20 && this.level < 30) {
        xp = enemy.level * 300;
    }

    if (battle_num == 3 && stage_num == 1) {
        xp += 5000;
    } else if (battle_num == 3 && stage_num == 2) {
        xp += 20000;
    } else if (battle_num == 3 && stage_num == 3) {
        xp += 40000;
    }

    xp_required = xp_requirement();
    p_xp.innerHTML = user.xp;
    p_reqxp.innerHTML = xp_required;
    user.xp += xp;
    while (user.xp >= xp_required) {
        level_up();
        user.xp -= xp_required;
        p_xp.innerHTML = user.xp;
        p_reqxp.innerHTML = xp_required;
        xp_required = xp_requirement();
    }
    p_xp.innerHTML = user.xp;
    p_reqxp.innerHTML = xp_required;
}

function level_up() {
    user.level++;
    user.atk +=(user.level - 1) * 5
    user.def += 1;
    user.maxhp += 200;
    user.hp = user.maxhp;
    user.mp = user.maxmp;
    p_lvl.innerHTML = user.level;
    p_maxhp.innerHTML = user.maxhp;
    p_hp.innerHTML = user.hp;
    p_atk.innerHTML = user.atk;
    p_def.innerHTML = user.def;
    user.applyChange();
    user.applyChange_mana();
    //log.innerHTML = "Elijah gained a level! HP and MP fully restored";
}

function check_hp() {
    if (user.hp <= 0) {
        user_turn = 2;
        setTimeout(function () {
            $("#player_box").effect("shake", {
                times: 8,
                distance: 5
            }, 1000);
            $("#player_box").toggle("explode").delay(250).toggle("explode");
        }, 500);
        log.innerHTML = "You DIED";
        setTimeout(function () {
            user.hp = user.maxhp;
            user.mp = user.maxmp;
            user.applyChange();
            user.applyChange_mana();
            battle_num = 0;
            battle();
        }, 2500);

    }
    if (enemy.hp <= 0) {
        user_turn = 2;
		setTimeout(function(){
			explode_sfx.play();
		},2000);
        if (stage_num == 3 && battle_num == 3) {
            setTimeout(function () {
                $("#enemy_box").effect("shake", {
                    times: 7,
                    distance: 3
                }, 1000).effect("shake", {
                    times: 14,
                    distance: 5
                }, 1000).effect("shake", {
                    times: 21,
                    distance: 7
                }, 1000).toggle("explode", {
                    pieces: 100
                });
            }, 1000);
            setTimeout(function () {
                $("#story_line1").fadeOut(100);
                $("#story_line2").fadeOut(100);
                $("#story_line3").fadeOut(100);
                $("#story_line4").fadeOut(100);
                $("#any").fadeOut(100);
                $(".loader").fadeIn(3000);
                $("#story_line5").fadeIn(5000);
            }, 5000)
        } else {
            setTimeout(function () {
                $("#enemy_box").effect("shake", {
                    times: 8,
                    distance: 5
                }, 1000).toggle("explode").delay(100).toggle("explode");
            }, 1000);
            setTimeout(function () {
                var amountGold = enemy.level * 25;
                curr_gold += amountGold;
                gain_xp();
                log.innerHTML = "You have successfully defeated " + enemy.name + " +" + xp + " xp " + " +" + amountGold + " gold.";
                
            }, 2000);



            


            
        }
        if (stage_num == 3 && battle_num == 3) {
            log.innerHTML = "You WIN"
        } else {
            setTimeout(function () {
                if (battle_num == 2 && stage_num == 1 && user.level < 8) {
                    battle_num = 0;
                } else if (battle_num == 2 && stage_num == 2 && user.level < 18) {
                    battle_num = 0;
                } else if (battle_num == 2 && stage_num == 3 && user.level < 18) {
                    battle_num = 0;
                }
                //generate gold
                battle()
            }, 2500);
        }

    }
}

function end_turn() {
    if (user.defend_duration > 0) {
        user.defend_duration--;
        //alert("Turns Left: " + user.defend_duration);
    }
    check_hp();
    if (user_turn == 1) {
        setTimeout(function () {
            enemy_turn()
        }, 2000);
    }
}

function enemy_turn() {
	
    enemy.animate_attack();
    setTimeout(function () {
        user.damaged(enemy.attack());
        user.applyChange();
    }, 400);
	
    setTimeout(function () {
        user_turn = 0;
        end_turn();
    }, 500)


}

var atkprice = 25;
var defprice = 25;
var hpprice = 25;

$(document).keypress(function (event) {
    if (event.key === "1") {
        if (user_turn == 0) {
            user_turn = 1;
            user.mp += 50;
            if (user.mp > user.maxmp) {
                user.mp = user.maxmp;
            }
            user.applyChange_mana();
            p_mp.innerHTML = user.mp;
            user.animate_attack();
            setTimeout(function () {
                enemy.animate_damage();
                $('#p_div').toggleClass('damage-show');
                $("#w_p_div").animate({
                    top: '25%'
                }).delay(500).animate({
                    top: '35%'
                });
                setTimeout(function () {
                    $('#p_div').removeClass('damage-show');
                }, 1000);
                $('#p_div').fadeIn(750).fadeOut(250);
            }, 850)
            enemy.damaged(user.attack());
            setTimeout(function () {
                enemy.applyChange();
            }, 1000)


            end_turn();
        } else if (user_turn == 1) {
            log.innerHTML = "Please wait..."
        } else if (user_turn == 2) {
            log.innerHTML = "Please wait..."
        }
    }

    if (event.key === "2") {
        if (user.mp >= 25) {
            user.mp -= 25;
            user.applyChange_mana();
            p_mp.innerHTML = user.mp;
            if (user_turn == 0) {
                user_turn = 1;
                user.animate_attack2();
                setTimeout(function () {
                    enemy.animate_damage();
                    $('#p_div').toggleClass('damage-show');
                    $("#w_p_div").animate({
                        top: '25%'
                    }).delay(500).animate({
                        top: '35%'
                    });
                    setTimeout(function () {
                        $('#p_div').removeClass('damage-show');
                    }, 1000);
                    $('#p_div').fadeIn(750).fadeOut(250);
                }, 900)
                enemy.damaged(user.rend());
                setTimeout(function () {
                    enemy.applyChange();
                }, 1000)
                end_turn();
            } else if (user_turn == 1) {
                log.innerHTML = "Please wait..."
            } else if (user_turn == 2) {
                log.innerHTML = "Please wait..."
            }
        } else {
            log.innerHTML = "Insufficient mp"
        }
    }

    if (event.key === "3") {
        if (user_turn == 0) {
            if (user.mp >= 50) {
                user_turn = 1;
                user.mp -= 50;
                user.applyChange_mana();
                p_mp.innerHTML = user.mp;
                user.animate_attack3();
                setTimeout(function () {
                    enemy.animate_damage();
                    $('#p_div').toggleClass('damage-show');
                    $("#w_p_div").animate({
                        top: '25%'
                    }).delay(500).animate({
                        top: '35%'
                    });
                    setTimeout(function () {
                        $('#p_div').removeClass('damage-show');
                    }, 1000);
                    $('#p_div').fadeIn(750).fadeOut(250);
                }, 900)
                enemy.damaged(user.overpower());
                setTimeout(function () {
                    enemy.applyChange();
                }, 1000)
                end_turn();
            } else {
                log.innerHTML = "Insufficient mp"
            }
        } else if (user_turn == 1) {
            log.innerHTML = "Please wait..."
        } else if (user_turn == 2) {
            log.innerHTML = "Please wait..."
        }
    }

    if (event.key === "4") {
        if (user_turn == 0) {
            if (user.defend_duration == 0) {
                if (user.mp >= 50) {
                    user.mp -= 50;
                    user.applyChange_mana();
                    p_mp.innerHTML = user.mp;
                    user.animate_defend();
                    user.defend();
                    user_turn = 1;
                    setTimeout(function () {

                        end_turn();
                    }, 500);
                } else {
                    log.innerHTML = "Insufficient mp"
                }
            } else {
                alert("Already defending");
            }

        } else if (user_turn == 1) {
            log.innerHTML = "Please wait..."
        } else if (user_turn == 2) {
            log.innerHTML = "Please wait..."
        }
    }

    if (event.key === "5") {
        if (user_turn == 0) {
            if (user.mp >= 50) {
                user.mp -= 50;
                user.applyChange_mana();
                p_mp.innerHTML = user.mp;
                user.hp += user.heal();
                user.animate_heal();
                user_turn = 1;
                setTimeout(function () {

                    end_turn();
                }, 1000);
                setTimeout(function () {
                    if (user.hp > user.maxhp) {
                        user.hp = user.maxhp;
                    }
                    p_hp.innerHTML = user.hp;
                    user.applyChange();
                }, 1500);


            } else {
                log.innerHTML = "Insufficient mp"
            }
        } else if (user_turn == 1) {
            log.innerHTML = "Please wait..."
        } else if (user_turn == 2) {
            log.innerHTML = "Please wait..."
        }
    }

    if (event.key === "6") {
        loader_bgm.play();
    }
    if (event.key === "7") {
        loader_bgm.pause();
    }
    if (event.key === "8") {
        level_up();
    }

    
});


$( "#atk-buy" ).click(function() {
    
    atk_price.innerHTML = atkprice;
    if(curr_gold>=atkprice){
		
        curr_gold -= atkprice;
		atkprice += 25;
        user.atk += 15;
        p_atk.innerHTML = user.atk;
        p_gold.innerHTML = curr_gold;
    }
});
    
    $( "#def-buy" ).click(function() {
        
    def_price.innerHTML = defprice;
    if(curr_gold>=defprice){
		
        curr_gold -= defprice;
		defprice += 25;
        user.def += 0.5;
        p_def.innerHTML = user.def;
        p_gold.innerHTML = curr_gold;
    }
});
    
    $( "#hp-buy" ).click(function() {
        
    hp_price.innerHTML = hpprice;
    if(curr_gold>=hpprice){
		
        curr_gold -= hpprice;
		hpprice += 25;
        user.maxhp += 100;
        user.hp += 100;
        p_hp.innerHTML = user.hp;
        p_maxhp.innerHTML = user.maxhp;
        p_gold.innerHTML = curr_gold;
        user.applyChange();
    }
});
