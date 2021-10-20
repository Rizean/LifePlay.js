const {STATS} = require('../constants')
const LPFloat = require('./LPFloat')
class LPStats {

    constructor({context, name}) {
        this._age = new LPFloat({context, name: `${name}:age`, isStat: true})
        this._arousal = new LPFloat({context, name: `${name}:arousal`, isStat: true})
        this._attractiontoplayer = new LPFloat({context, name: `${name}:attractiontoplayer`, isStat: true})
        this._attractiveness = new LPFloat({context, name: `${name}:attractiveness`, isStat: true})
        this._car_value = new LPFloat({context, name: `${name}:car_value`, isStat: true})
        this._children = new LPFloat({context, name: `${name}:children`, isStat: true})
        this._cooking = new LPFloat({context, name: `${name}:cooking`, isStat: true})
        this._dance = new LPFloat({context, name: `${name}:dance`, isStat: true})
        this._energy = new LPFloat({context, name: `${name}:energy`, isStat: true})
        this._fertility = new LPFloat({context, name: `${name}:fertility`, isStat: true})
        this._fitness = new LPFloat({context, name: `${name}:fitness`, isStat: true})
        this._incest = new LPFloat({context, name: `${name}:incest`, isStat: true})
        this._intelligence = new LPFloat({context, name: `${name}:intelligence`, isStat: true})
        this._interpersonal = new LPFloat({context, name: `${name}:interpersonal`, isStat: true})
        this._intoxication = new LPFloat({context, name: `${name}:intoxication`, isStat: true})
        this._jobexperience = new LPFloat({context, name: `${name}:jobexperience`, isStat: true})
        this._jobperformance = new LPFloat({context, name: `${name}:jobperformance`, isStat: true})
        this._martial = new LPFloat({context, name: `${name}:martial`, isStat: true})
        this._masochist = new LPFloat({context, name: `${name}:masochist`, isStat: true})
        this._money = new LPFloat({context, name: `${name}:money`, isStat: true})
        this._mood = new LPFloat({context, name: `${name}:mood`, isStat: true})
        this._muscle = new LPFloat({context, name: `${name}:muscle`, isStat: true})
        this._music = new LPFloat({context, name: `${name}:music`, isStat: true})
        this._perversion = new LPFloat({context, name: `${name}:perversion`, isStat: true})
        this._pet_health = new LPFloat({context, name: `${name}:pet_health`, isStat: true})
        this._pornfame = new LPFloat({context, name: `${name}:pornfame`, isStat: true})
        this._rapportwithplayer = new LPFloat({context, name: `${name}:rapportwithplayer`, isStat: true})
        this._sneak = new LPFloat({context, name: `${name}:sneak`, isStat: true})
        this._stock_alcohol = new LPFloat({context, name: `${name}:stock_alcohol`, isStat: true})
        this._stock_book = new LPFloat({context, name: `${name}:stock_book`, isStat: true})
        this._stock_coffee = new LPFloat({context, name: `${name}:stock_coffee`, isStat: true})
        this._stock_condom = new LPFloat({context, name: `${name}:stock_condom`, isStat: true})
        this._stock_flower = new LPFloat({context, name: `${name}:stock_flower`, isStat: true})
        this._stock_gift = new LPFloat({context, name: `${name}:stock_gift`, isStat: true})
        this._stock_haircare = new LPFloat({context, name: `${name}:stock_haircare`, isStat: true})
        this._stock_ingredient = new LPFloat({context, name: `${name}:stock_ingredient`, isStat: true})
        this._stock_juice = new LPFloat({context, name: `${name}:stock_juice`, isStat: true})
        this._stock_makeup = new LPFloat({context, name: `${name}:stock_makeup`, isStat: true})
        this._stock_meal = new LPFloat({context, name: `${name}:stock_meal`, isStat: true})
        this._stock_movie = new LPFloat({context, name: `${name}:stock_movie`, isStat: true})
        this._stock_musicalinstrument = new LPFloat({context, name: `${name}:stock_musicalinstrument`, isStat: true})
        this._stock_petfood = new LPFloat({context, name: `${name}:stock_petfood`, isStat: true})
        this._stock_photo = new LPFloat({context, name: `${name}:stock_photo`, isStat: true})
        this._stock_pill = new LPFloat({context, name: `${name}:stock_pill`, isStat: true})
        this._stock_skincare = new LPFloat({context, name: `${name}:stock_skincare`, isStat: true})
        this._stock_snack = new LPFloat({context, name: `${name}:stock_snack`, isStat: true})
        this._stock_soda = new LPFloat({context, name: `${name}:stock_soda`, isStat: true})
        this._stock_supplement = new LPFloat({context, name: `${name}:stock_supplement`, isStat: true})
        this._stock_tea = new LPFloat({context, name: `${name}:stock_tea`, isStat: true})
        this._stock_tobacco = new LPFloat({context, name: `${name}:stock_tobacco`, isStat: true})
        this._stock_video = new LPFloat({context, name: `${name}:stock_video`, isStat: true})
    }


    /**
     * age
     * @type {LPFloat}
     */
    get age() {
        return this._age;
    }
    set age(age) {
        this._age.assign(age)
    }

    /**
     * arousal
     * @type {LPFloat}
     */
    get arousal() {
        return this._arousal;
    }
    set arousal(arousal) {
        this._arousal.assign(arousal)
    }

    /**
     * attractiontoplayer
     * @type {LPFloat}
     */
    get attractiontoplayer() {
        return this._attractiontoplayer;
    }
    set attractiontoplayer(attractiontoplayer) {
        this._attractiontoplayer.assign(attractiontoplayer)
    }

    /**
     * attractiveness
     * @type {LPFloat}
     */
    get attractiveness() {
        return this._attractiveness;
    }
    set attractiveness(attractiveness) {
        this._attractiveness.assign(attractiveness)
    }

    /**
     * car_value
     * @type {LPFloat}
     */
    get car_value() {
        return this._car_value;
    }
    set car_value(car_value) {
        this._car_value.assign(car_value)
    }

    /**
     * children
     * @type {LPFloat}
     */
    get children() {
        return this._children;
    }
    set children(children) {
        this._children.assign(children)
    }

    /**
     * cooking
     * @type {LPFloat}
     */
    get cooking() {
        return this._cooking;
    }
    set cooking(cooking) {
        this._cooking.assign(cooking)
    }

    /**
     * dance
     * @type {LPFloat}
     */
    get dance() {
        return this._dance;
    }
    set dance(dance) {
        this._dance.assign(dance)
    }

    /**
     * energy
     * @type {LPFloat}
     */
    get energy() {
        return this._energy;
    }
    set energy(energy) {
        this._energy.assign(energy)
    }

    /**
     * fertility
     * @type {LPFloat}
     */
    get fertility() {
        return this._fertility;
    }
    set fertility(fertility) {
        this._fertility.assign(fertility)
    }

    /**
     * fitness
     * @type {LPFloat}
     */
    get fitness() {
        return this._fitness;
    }
    set fitness(fitness) {
        this._fitness.assign(fitness)
    }

    /**
     * incest
     * @type {LPFloat}
     */
    get incest() {
        return this._incest;
    }
    set incest(incest) {
        this._incest.assign(incest)
    }

    /**
     * intelligence
     * @type {LPFloat}
     */
    get intelligence() {
        return this._intelligence;
    }
    set intelligence(intelligence) {
        this._intelligence.assign(intelligence)
    }

    /**
     * interpersonal
     * @type {LPFloat}
     */
    get interpersonal() {
        return this._interpersonal;
    }
    set interpersonal(interpersonal) {
        this._interpersonal.assign(interpersonal)
    }

    /**
     * intoxication
     * @type {LPFloat}
     */
    get intoxication() {
        return this._intoxication;
    }
    set intoxication(intoxication) {
        this._intoxication.assign(intoxication)
    }

    /**
     * jobexperience
     * @type {LPFloat}
     */
    get jobexperience() {
        return this._jobexperience;
    }
    set jobexperience(jobexperience) {
        this._jobexperience.assign(jobexperience)
    }

    /**
     * jobperformance
     * @type {LPFloat}
     */
    get jobperformance() {
        return this._jobperformance;
    }
    set jobperformance(jobperformance) {
        this._jobperformance.assign(jobperformance)
    }

    /**
     * martial
     * @type {LPFloat}
     */
    get martial() {
        return this._martial;
    }
    set martial(martial) {
        this._martial.assign(martial)
    }

    /**
     * masochist
     * @type {LPFloat}
     */
    get masochist() {
        return this._masochist;
    }
    set masochist(masochist) {
        this._masochist.assign(masochist)
    }

    /**
     * money
     * @type {LPFloat}
     */
    get money() {
        return this._money;
    }
    set money(money) {
        this._money.assign(money)
    }

    /**
     * mood
     * @type {LPFloat}
     */
    get mood() {
        return this._mood;
    }
    set mood(mood) {
        this._mood.assign(mood)
    }

    /**
     * muscle
     * @type {LPFloat}
     */
    get muscle() {
        return this._muscle;
    }
    set muscle(muscle) {
        this._muscle.assign(muscle)
    }

    /**
     * music
     * @type {LPFloat}
     */
    get music() {
        return this._music;
    }
    set music(music) {
        this._music.assign(music)
    }

    /**
     * perversion
     * @type {LPFloat}
     */
    get perversion() {
        return this._perversion;
    }
    set perversion(perversion) {
        this._perversion.assign(perversion)
    }

    /**
     * pet_health
     * @type {LPFloat}
     */
    get pet_health() {
        return this._pet_health;
    }
    set pet_health(pet_health) {
        this._pet_health.assign(pet_health)
    }

    /**
     * pornfame
     * @type {LPFloat}
     */
    get pornfame() {
        return this._pornfame;
    }
    set pornfame(pornfame) {
        this._pornfame.assign(pornfame)
    }

    /**
     * rapportwithplayer
     * @type {LPFloat}
     */
    get rapportwithplayer() {
        return this._rapportwithplayer;
    }
    set rapportwithplayer(rapportwithplayer) {
        this._rapportwithplayer.assign(rapportwithplayer)
    }

    /**
     * sneak
     * @type {LPFloat}
     */
    get sneak() {
        return this._sneak;
    }
    set sneak(sneak) {
        this._sneak.assign(sneak)
    }

    /**
     * stock_alcohol
     * @type {LPFloat}
     */
    get stock_alcohol() {
        return this._stock_alcohol;
    }
    set stock_alcohol(stock_alcohol) {
        this._stock_alcohol.assign(stock_alcohol)
    }

    /**
     * stock_book
     * @type {LPFloat}
     */
    get stock_book() {
        return this._stock_book;
    }
    set stock_book(stock_book) {
        this._stock_book.assign(stock_book)
    }

    /**
     * stock_coffee
     * @type {LPFloat}
     */
    get stock_coffee() {
        return this._stock_coffee;
    }
    set stock_coffee(stock_coffee) {
        this._stock_coffee.assign(stock_coffee)
    }

    /**
     * stock_condom
     * @type {LPFloat}
     */
    get stock_condom() {
        return this._stock_condom;
    }
    set stock_condom(stock_condom) {
        this._stock_condom.assign(stock_condom)
    }

    /**
     * stock_flower
     * @type {LPFloat}
     */
    get stock_flower() {
        return this._stock_flower;
    }
    set stock_flower(stock_flower) {
        this._stock_flower.assign(stock_flower)
    }

    /**
     * stock_gift
     * @type {LPFloat}
     */
    get stock_gift() {
        return this._stock_gift;
    }
    set stock_gift(stock_gift) {
        this._stock_gift.assign(stock_gift)
    }

    /**
     * stock_haircare
     * @type {LPFloat}
     */
    get stock_haircare() {
        return this._stock_haircare;
    }
    set stock_haircare(stock_haircare) {
        this._stock_haircare.assign(stock_haircare)
    }

    /**
     * stock_ingredient
     * @type {LPFloat}
     */
    get stock_ingredient() {
        return this._stock_ingredient;
    }
    set stock_ingredient(stock_ingredient) {
        this._stock_ingredient.assign(stock_ingredient)
    }

    /**
     * stock_juice
     * @type {LPFloat}
     */
    get stock_juice() {
        return this._stock_juice;
    }
    set stock_juice(stock_juice) {
        this._stock_juice.assign(stock_juice)
    }

    /**
     * stock_makeup
     * @type {LPFloat}
     */
    get stock_makeup() {
        return this._stock_makeup;
    }
    set stock_makeup(stock_makeup) {
        this._stock_makeup.assign(stock_makeup)
    }

    /**
     * stock_meal
     * @type {LPFloat}
     */
    get stock_meal() {
        return this._stock_meal;
    }
    set stock_meal(stock_meal) {
        this._stock_meal.assign(stock_meal)
    }

    /**
     * stock_movie
     * @type {LPFloat}
     */
    get stock_movie() {
        return this._stock_movie;
    }
    set stock_movie(stock_movie) {
        this._stock_movie.assign(stock_movie)
    }

    /**
     * stock_musicalinstrument
     * @type {LPFloat}
     */
    get stock_musicalinstrument() {
        return this._stock_musicalinstrument;
    }
    set stock_musicalinstrument(stock_musicalinstrument) {
        this._stock_musicalinstrument.assign(stock_musicalinstrument)
    }

    /**
     * stock_petfood
     * @type {LPFloat}
     */
    get stock_petfood() {
        return this._stock_petfood;
    }
    set stock_petfood(stock_petfood) {
        this._stock_petfood.assign(stock_petfood)
    }

    /**
     * stock_photo
     * @type {LPFloat}
     */
    get stock_photo() {
        return this._stock_photo;
    }
    set stock_photo(stock_photo) {
        this._stock_photo.assign(stock_photo)
    }

    /**
     * stock_pill
     * @type {LPFloat}
     */
    get stock_pill() {
        return this._stock_pill;
    }
    set stock_pill(stock_pill) {
        this._stock_pill.assign(stock_pill)
    }

    /**
     * stock_skincare
     * @type {LPFloat}
     */
    get stock_skincare() {
        return this._stock_skincare;
    }
    set stock_skincare(stock_skincare) {
        this._stock_skincare.assign(stock_skincare)
    }

    /**
     * stock_snack
     * @type {LPFloat}
     */
    get stock_snack() {
        return this._stock_snack;
    }
    set stock_snack(stock_snack) {
        this._stock_snack.assign(stock_snack)
    }

    /**
     * stock_soda
     * @type {LPFloat}
     */
    get stock_soda() {
        return this._stock_soda;
    }
    set stock_soda(stock_soda) {
        this._stock_soda.assign(stock_soda)
    }

    /**
     * stock_supplement
     * @type {LPFloat}
     */
    get stock_supplement() {
        return this._stock_supplement;
    }
    set stock_supplement(stock_supplement) {
        this._stock_supplement.assign(stock_supplement)
    }

    /**
     * stock_tea
     * @type {LPFloat}
     */
    get stock_tea() {
        return this._stock_tea;
    }
    set stock_tea(stock_tea) {
        this._stock_tea.assign(stock_tea)
    }

    /**
     * stock_tobacco
     * @type {LPFloat}
     */
    get stock_tobacco() {
        return this._stock_tobacco;
    }
    set stock_tobacco(stock_tobacco) {
        this._stock_tobacco.assign(stock_tobacco)
    }

    /**
     * stock_video
     * @type {LPFloat}
     */
    get stock_video() {
        return this._stock_video;
    }
    set stock_video(stock_video) {
        this._stock_video.assign(stock_video)
    }

}
module.exports = LPStats