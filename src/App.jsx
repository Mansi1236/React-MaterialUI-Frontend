import React from "react";
import MovieCard from "./components/MovieCard";
import Navbar from './components/navbar';
import Images from './images.jsx';

const App = () =>  {
return(
<>

<Navbar/>
<MovieCard name={'The Good Dinosaur'} desc={'The Good Dinosaur is an animated adventure from Pixar and Disney about Arlo, a timid dinosaur who goes on a big adventure to find his family. Everyone on Arlo’s family farm makes a mark, showing they have done something greater then themselves. When Arlo tries to do the same, his father ends up dying, and Arlo gets lost. Arlo has to stand up to his fears and try to make it home to his family before the first snowfall.'}  image={Images.thegoodDinosaur1} trailer={'https://youtu.be/O-RgquKVTPE'}/>

<MovieCard name='Toy Story' desc={' Woody, a good-hearted cowboy doll who belongs to a young boy named Andy, sees his position as Andys favorite toy jeopardized when his parents buy him a Buzz Lightyear action figure. Even worse, the arrogant Buzz thinks he is a real spaceman on a mission to return to his home planet. When Andys family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips and reunite with their boy.'} image={Images.toystory}  trailer={'https://youtu.be/tN1A2mVnrOM'}/>

<MovieCard name={'A Bugs Life'} desc={'Flik is an inventive ant who is always messing things up for his colony. His latest mishap was destroying the food stores that were supposed to be used to pay off grasshopper Hopper. Now the strong-arming insect is demanding that the ants gather double the food -- or face annihilation. To avert disaster, Flik goes on a journey to recruit fighters to defend the colony. When he meets a band of high-flying circus insects, he thinks he has found his salvation'} image={Images.abugslife}  trailer={'https://youtu.be/EqdR4m--GDM'}/>

<MovieCard name={'Cars'} desc={' Lightning McQueen, a racing car, learns a hard lesson in life when he damages a lot of property in Radiator Springs. His task is to repair the damage done before he can get back on the road. '} image={Images.cars} trailer={'https://youtu.be/-Vui-DhwIAg'}/>

<MovieCard name={'Coco'} desc={' The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his familys ban on music. '}   image={Images.coco} trailer={'https://youtu.be/xlnPHQ3TLX8'} />

<MovieCard name={'Findig Nemo'} desc={' In the colorful and warm tropical waters of the Great Barrier Reef, a Clown Fish named Marlin lives safe and secluded in his anemone home with his only son, Nemo. Fearful of the ocean and its unpredictable risks, he struggles to protect his son. Nemo, like all young fish, is eager to explore the mysterious reef. When Nemo is unexpectedly taken far from home and thrust into a tacky dentist’s office fish tank, Marlin finds himself the unlikely hero on an epic journey to rescue his son.  '}  image={Images.findingnemo} trailer={'https://youtu.be/SPHfeNgogVs'}/>

<MovieCard name={'The Incredibles'} desc={' Married superheroes Mr. Incredible  and Elastigirl are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble, and it is up to his family to save him. '} image={Images.theincredibles} trailer={'https://youtu.be/-UaGUdNJdRQ'}/>

<MovieCard name={'Inside Out'} desc={' A young girl named Riley is born in Minnesota. In her mind, which is commonly referred to as "Headquarters", five personified emotions are created over time: Joy, Sadness, Fear, Disgust and Anger, each one being introduced in this specific order. The emotions are charged with reacting to Rileys circumstances and forming her memories, which are housed in spheres that produce a certain color depending on the emotion of the memory. The most important memories, which are known as "Core Memories", power five "Islands of Personality" that each reflect a different aspect of Rileys personality: Family Island, Friendship Island, Hockey Island, Honesty Island, and Goofball Island. '} image={Images.insideout} trailer={'https://youtu.be/yRUAzGQ3nSY'}/>

<MovieCard name={'Monsters Inc.'} desc={' Monsters Incorporated is the largest scare factory in the monster world, and James P. Sullivan (John Goodman) is one of its top scarers. Sullivan is a huge, intimidating monster with blue fur, large purple spots and horns. His scare assistant, best friend and roommate is Mike Wazowski (Billy Crystal), a green, opinionated, feisty little one-eyed monster. Visiting from the human world is Boo (Mary Gibbs), a tiny girl who goes where no human has ever gone before. '} image={Images.monstersinc} trailer={'https://youtu.be/6tCxnHCqqxg'}/>
 
<MovieCard name={'Onward'} desc={' Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries. But when dear Mom finds out her sons are missing, she teams up with the legendary manticore to bring her beloved boys back home. '} image={Images.onward} trailer={'https://youtu.be/gn5QmllRCn4'}/>

<MovieCard name={'Ratatouille'} desc={' Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually gets the chance to prove his culinary abilities to a great food critic but is the food good? '} image={Images.ratatouille} trailer={'https://youtu.be/NgsQ8mVkN8w'}/>

<MovieCard name={'Incredibles 2'} desc={'  Telecommunications guru Winston Deavor enlists Elastigirl to fight crime and make the public fall in love with superheroes once again. That leaves Mr. Incredible with one of his greatest challenges ever -- staying home and taking care of three rambunctious children. As Violet, Dash and Jack-Jack offer him a new set of headaches, a cybercriminal named Screenslaver launches his dastardly plan -- hypnotizing the world through computer screens. '} image={Images.incredibles2} trailer={'https://youtu.be/ZJDMWVZta3M'}/>

<MovieCard name={'Toy story 2'} desc={'  Woody is stolen from his home by toy dealer Al McWhiggin, leaving Buzz Lightyear and the rest of the gang to try to rescue him. But when Woody discovers that heis actually a valuable collectible from a once-popular television show called "Woodys Roundup" and is reunited with his horse Bullseye, Jessie the yodeling cowgirl and his faithful sidekick, Stinky Pete the Prospector, he does not want to leave. '} image={Images.toystory2} trailer={'https://youtu.be/xNWSGRD5CzU'}/>

<MovieCard name={'Up'} desc={'Carl Fredricksen, a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carls worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house.'} image={Images.up} trailer={'https://youtu.be/HWEW_qTLSEE'}/>

<MovieCard name={'Toy Story 3'} desc={' With their beloved Andy preparing to leave for college, Woody, Buzz Lightyear, Jessie, and the rest of the toys find themselves headed for the attic but mistakenly wind up on the curb with the trash. Woodys quick thinking saves the gang, but all but Woody end up being donated to a day-care center. Unfortunately, the uncontrollable kids do not play nice, so Woody and the gang make plans for a great escape. '} image={Images.toystory3} trailer={'https://youtu.be/JcpWXaA2qeg'}/>

<MovieCard name={'Finding Dory'} desc={' Dory is a wide-eyed, blue tang fish who suffers from memory loss every 10 seconds or so. The one thing she can remember is that she somehow became separated from her parents as a child. With help from her friends Nemo and Marlin, Dory embarks on an epic adventure to find them. Her journey brings her to the Marine Life Institute, a conservatory that houses diverse ocean species. Dory now knows that her family reunion will only happen if she can save mom and dad from captivity. '} image={Images.findingdory} trailer={'https://youtu.be/JhvrQeY3doI'}/>

<MovieCard name={'Cars 2'} desc={' Racecar Lightning McQueen and his tow-truck buddy, Mater, have had their share of adventures together but nothing like what they experience when they head overseas for the first-ever World Grand Prix. While Lightning has his eye on the road to the championship, Mater takes a detour to international espionage when he meets British master spy Finn McMissile and stunning spy-in-training Holley Shiftwell. '} image={Images.cars2} trailer={'https://youtu.be/oFTfAdauCOo'}/>

<MovieCard name={'Toy story 4'} desc={'Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woodys slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they are worlds apart when it comes to what they want from life as a toy. '} image={Images.toystory4} trailer={'https://youtu.be/wmiIUN-7qhE'}/>

<MovieCard name={'Wall-E'} desc={'  WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he is more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy. '} image={Images.walle} trailer={'https://youtu.be/alIq_wG9FNk'}/>

<MovieCard name={'Cars 3'} desc={' Blindsided by a new generation of blazing-fast cars, the legendary Lighting McQueen finds himself pushed out of the sport that he loves. Hoping to get back in the game, he turns to Cruz Ramirez, an eager young technician who has her own plans for winning. With inspiration from the Fabulous Hudson Hornet and a few unexpected turns, No. 95 prepares to compete on Piston Cup Racings biggest stage.'} image={Images.cars3} trailer={'https://youtu.be/2LeOH9AGJQM'}/>

<MovieCard name={'Brave'} desc={'Merida, the impetuous but courageous daughter of Scottish King Fergus and Queen Elinor, is a skilled archer who wants to carve out her own path in life. Her defiance of an age-old tradition angers the Highland lords and leads to chaos in the kingdom. Merida seeks help from an eccentric witch (Julie Walters), who grants her an ill-fated wish. Now, Merida must discover the true meaning of courage and undo a beastly curse before it is too late. '} image={Images.brave} trailer={'https://youtu.be/TEHWDA_6e3M'}/>

<MovieCard name={'Monsters University'} desc={'Ever since he was a kid monster, Mike Wazowski has dreamed of becoming a Scarer. To make his dream a reality, he enrolls at Monsters University. During his first semester, he meets Sulley, a natural-born Scarer. Sulley and Mike engage in a fierce rivalry that ultimately gets them both kicked out of MUs elite Scare Program. To make things right, Mike and Sulley -- along with a bunch of misfit monsters -- will have to learn to work together.'} image={Images.monstersuniversity} trailer={'https://youtu.be/6tCxnHCqqxg'}/>

<MovieCard  name={ ' Soul '} desc={ 'Joe is a middle-school band teacher whose life has not quite gone the way he expected. His real passion is jazz and he is good at it. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.' } image={Images.soul} trailer={'https://youtu.be/xOsLIiBStEs'}/>

<MovieCard  name={ ' Luca'} desc={ 'Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the waters surface.' } image={ Images.luca} trailer={'https://youtu.be/mYfJxlgR2jw'}/>

<MovieCard  name={ ' Turning Red'} desc={ ' A thirteen-year-old girl is torn between staying her mothers dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited she transforms into a giant red panda.'} image={Images.turningred} trailer={'https://youtu.be/XdKzUbAiswE'}/>

<MovieCard  name={ 'Lightyear' } desc={ ' Legendary space ranger Buzz Lightyear embarks on an intergalactic adventure alongside ambitious recruits Izzy, Mo, Darby, and his robot companion, Sox. As this motley crew tackles their toughest mission yet, they must learn to work together as a team to escape the evil Zurg and his dutiful robot army that are never far behind.' } image={Images.lightyear} trailer={'https://youtu.be/BwZs3H_UN3k'}/>

<footer>
<h4 align='center' marginTop='40px'> Created by Mansi 💟 😇 </h4>
</footer>

</>

);

}
export default App;