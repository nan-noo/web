const words = ['tacky','party','disappear','mug','cat','unpack','liquid','last','tasteful','substantial','slimy','cars','fowl','lyrical','rock','chance','oafish','passenger','silver','signal','rely','makeshift','overt','smart','pale','parcel','contain','earn','brainy','sloppy','tearful','suck','efficacious','defiant','delirious','scandalous','roof','bashful','hall','enjoy','expansion','halting','satisfying','current','electric','add','callous','respect','annoyed','letter','cloistered','mix','watch','rate','maddening','agreeable','mute','town','dirty','interesting','blood','jam','zipper','hat','houses','hose','bell','hapless','open','screeching','dog','cup','capable','quiver','peck','endurable','found','weight','sand','bag','building','straight','giant','invention','reading','boundless','hunt','vanish','raise','heartbreaking','gray','annoying','tart','way','jumbled','sparkling','wheel','hand','nice','short','spiders','regret','pedal','chew','concern','book','secret','attractive','cagey','tremendous','elated','fluffy','girls','accurate','insurance','apathetic','abhorrent','acrid','fool','mountainous','whine','impossible','preach','clever','same','nation','nippy','frequent','capricious','texture','drunk','strap','sign','arrive','avoid','early','painstaking','applaud','skip','grandiose','stretch','good','changeable','seemly','imported','visit','trace','scare','absorbed','mouth','erratic','unbiased','sea','plug','undress','meeting','amuse','spring','long-term','spiteful','bathe','shrug','alarm','concerned','oil','suppose','wanting','fat','deafening','railway','farm','damage','red','heat','picayune','apologise','murky','sordid','amuck','equal','friendly','sleep','regular','funny','likeable','look','advertisement','deep','sort','trap','lunch','yoke','unusual','irate','imperfect','heap','overconfident','try','chunky','language','hypnotic','reach','robust','cover','zephyr','adaptable','reminiscent','crack','large','chivalrous','neck','wandering','bright','carve','sigh','shaggy','duck','man','volatile','realize','word','ad hoc','spotless','value','money','rhyme','grandmother','fabulous','false','weak','rail','crowd','call','gentle','quarter','elbow','responsible','tremble','giants','stingy','clammy','erect','claim','tooth','cruel','astonishing','fancy','program','grease','furniture','eatable','pump','toothbrush','unwieldy','addicted','stop','slim','intelligent','name','destroy','discreet','tow','roomy','gather','unique','evanescent','car','moan','whisper','tumble','position','continue','dream','lean','linen','hysterical','hospital','skin','wobble','toy','quixotic','writer','trick','mundane','fearful','itchy','oval','heavenly','abortive','peel','grumpy','stone','receipt','determined','educated','harsh','waves','pies','disturbed','unbecoming','reduce','teaching','frighten','minister','scientific','pat','nail','dependent','wiggly','welcome','sparkle','system','inconclusive','standing','peace','uppity','property','wing','medical','hateful','clap','offend','camera','slippery','literate','voyage','back','detailed','vagabond','argue','enter','consider','adamant','berry','songs','idiotic','abrupt','resonant','skate','meek','jobless','hang','political','ethereal','telling','mom','nutty','kindly','ratty','recondite','luxuriant','expand','careless','subtract','fry','outrageous','pushy','hop','maid','treatment','aberrant','jail','anger','pipe','brief','cap','scary','stormy','probable','perfect','exotic','blushing','cute','wren','whimsical','jittery','inject','taste','tire','high','rebel','zonked','insidious','poised','interrupt','nosy','twist','sugar','measly','pause','bleach','mice','slope','card','testy','education','ruddy','innate','wrong','violent','refuse','number','beef','risk','kitty','belligerent','hydrant','ossified','flimsy','request','wail','inform','badge','spell','support','hurry','owe','smoggy','hospitable','automatic','dolls','threatening','connection','quicksand','rule','smell','ten','authority','dad','remain','stimulating','groovy','scale','longing','decisive','walk','government','snail','giraffe','cumbersome','confess','x-ray','hill','offer','shelter','turn','page','serve','nose','kill','joke','dam','bloody','punch','run','lip','vacuous','flag','tramp','mend','plan','pot','machine','rings','tall','abnormal','announce','gun','selfish','therapeutic','teeny-tiny','unlock','garrulous','slow','thin','smile','fade','fierce','cannon','sun','synonymous','please','sticks','noiseless','ill-fated','scene','zoo','majestic','mysterious','mint','discussion','food','abstracted','judge','protest','round','used','fact','clam','tan'];

const cleanChildren = element => {
    while (element.lastChild) element.removeChild(element.lastChild);
};

const searchWords = () => {
    let searchResult = document.getElementById('search-results');
    let inputV = document.getElementById('word-search-input').value;

    console.log(inputV);
    cleanChildren(searchResult);

    if(inputV.length === 0) return;

    for(const word of words){
        if(word.indexOf(inputV) !== -1){
            searchResult.innerHTML += "<li>" + word + "</li>"
        }
    }
}