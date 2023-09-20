const b1 = document.getElementById("button1");
const d1 = document.getElementById("drop1");

b1.addEventListener('click', add);

function add() {
    const h1 = document.getElementById("head1");
    const t1 = document.getElementById("title1");
    const p1 = document.getElementById("para1");

    if (d1.value == "1") {
        h1.innerHTML = `<h3>Healine:Nasa Moon rocket ready for second attempt at liftoff</h3>`;
        t1.innerHTML = `<h2>Date: 31/08/2022</h2>`;
        p1.innerHTML = `<p>"Our team is ready," said Jeremy Parsons, deputy manager of exploration ground systems at Kennedy Space Center, on Friday.
        "They are getting better with every attempt and actually performed superbly during launch countdown number one... I think if the conditions with weather and the hardware align, we'll absolutely go."
        Though the area around the launch site will be closed to the public, 400,000 people are expected to gather on beaches nearby to see -- and hear -- the most powerful vehicle that Nasa has ever launched climb into space.
        Nasa's initial launch attempt on Monday was halted after engineers detected a fuel leak and a sensor showed that one of the rocket's four main engines was too hot.
        Both issues have since been resolved, the launch team said.
        Shortly before 6am (1000 GMT), launch director Charlie Blackwell-Thompson gave the go-ahead to start filling the rocket's tanks with cryogenic fuel.
        About three million liters of ultra-cold liquid hydrogen and oxygen is expected to be pumped into the spacecraft.
        And the weather appears to be cooperating: the US Space Force predicts a 60 percent chance of favorable weather at the scheduled liftoff time, growing to 80 per cent later in the launch window.
        If something requires Nasa to stand down again on Saturday, there are backup opportunities on Monday or Tuesday. After that, the next launch window will not be until September 19, due to the Moon's position.
        The purpose of the Artemis 1 mission is to verify that the Orion capsule, which sits atop the SLS rocket, is safe to carry astronauts in the future.</p>`;
    }
    else if (d1.value == "2") {
        h1.innerHTML = `<h3>Headline:California wildfire destroys 100 homes, other buildings</h3>`;
        t1.innerHTML = `<h2>Date: 01/09/2022</h2>`;
        p1.innerHTML = `<p>WEED: A wind-swept wildfire in rural Northern California tore through a neighborhood and destroyed about 100 homes and other buildings, fire officials said Saturday after at least two people were injured and thousands were forced from their homes.
        The Mill Fire started shortly before 1 p.m. Friday just north of Weed, a city of about 2,600 people 250 miles (402 km) north of San Francisco. The flames raced into the Lincoln Heights neighborhood where a significant number of homes burned and residents had to flee for their lives.
        Two people were brought to Mercy Medical Center Mount Shasta. One was in stable condition and the other was transferred to UC Davis Medical Center, which has a burn unit.
        Cal Fire Siskiyou Unit Chief Phil Anzo said crews worked all day and night to protect structures in Weed and in a subdivision to the east known as Carrick Addition.
        
        "There's a lot at stake on that Mill Fire," he said. "There's a lot of communities, a lot of homes there."
        Weather conditions improved overnight and firefighters were able to get 20% containment but another blaze, the Mountain Fire, that broke out Friday northwest of Weed grew substantially. No injuries or buildings had been reported lost in that fire. The causes for both fires were under investigation.
        Anzo estimated about 100 homes and other buildings were lost in the Mill Fire. Gov. Gavin Newsom declared a state of emergency for Siskiyou County and said a federal grant had been received "to help ensure the availability of vital resources to suppress the fire."</p>`;
    }
    else if (d1.value == "3") {
        h1.innerHTML = `<h3>Headline:Barack Obama wins Emmy for narrating national parks series</h3>`;
        t1.innerHTML = `<h2>Date: 02/09/2022</h2>`;
        p1.innerHTML = `<p>Barack Obama is halfway to an EGOT. The former US president won an Emmy Award on Saturday to go with his two Grammys. Obama won the best narrator Emmy for his work on the Netflix documentary series, "Our Great National Parks". The five-part show, which features national parks from around the globe, is produced by Barack and Michelle Obama's production company, "Higher Ground". He was the biggest name in a category full of famous nominees for the award handed out at Saturday night's Creative Arts Emmys, including Kareem Abdul-Jabbar, David Attenborough and Lupita Nyong'o. Barack Obama is the second president to have an Emmy. Dwight D Eisenhower was given a special Emmy Award in 1956. EGOT refers to a special category of entertainers who have won an Emmy, a Grammy, an Oscar and a Tony. To date, 17 people have done it.</p>`;
    }
    else if (d1.value == "4") {
        h1.innerHTML = `<h3>Headline:Manhunt underway after 10 killed, 15 wounded in stabbing rampage in Canada</h3>`;
        t1.innerHTML = `<h2>Date: 03/09/2022</h2>`;
        p1.innerHTML = `<p>A manhunt was underway Monday across three Canadian provinces after a stabbing rampage that left 10 people dead and 15 wounded in one of the deadliest mass killings in Canadian history.

        The attacks early Saturday took place in at least 13 locations in and around the James Smith Cree Nation in Saskatchewan, a sprawling province nearly the size of Texas. Authorities said there could be additional victims.
        
        The suspects, identified as Damien Sanderson, 31, and Myles Sanderson, 30, were seen later Sunday driving a black Nissan Rogue in Regina, 200 miles south of where the attacks took place. Regina is about 100 miles north of the Montana border.
        
        The relationship between the two suspects had not been determined, said Rhonda Blackmore, commanding officer of the Saskatchewan Royal Canadian Mounted Police.</p>`;
    }


}
