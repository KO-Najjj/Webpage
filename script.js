// =====================================
// BAYFIT - GYM + PILATES DATA
// =====================================

const gyms = [
  // =====================================
  // SAN FRANCISCO
  // =====================================

  {
    name: "24 Hour Fitness",
    city: "San Francisco",
    address: "1200 Van Ness Ave, San Francisco, CA 94109",
    type: "Gym",
    website: "https://www.24hourfitness.com/",
    notes:
      "Full-service fitness center with cardio, weights, and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "FITNESS SF - SoMa",
    city: "San Francisco",
    address: "1001 Brannan St, San Francisco, CA 94103",
    type: "Gym",
    website: "https://fitnesssf.com/",
    notes:
      "Large fitness club with cardio equipment, free weights, and strength training.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Sunset Gym",
    city: "San Francisco",
    address: "1247 9th Ave, San Francisco, CA 94122",
    type: "Gym",
    website: "https://sunsetgym.com/",
    notes:
      "Neighborhood gym offering cardio, strength equipment, and personal training.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Live Fit Gym - Hayes Valley",
    city: "San Francisco",
    address: "301 Fell St, San Francisco, CA 94102",
    type: "Gym",
    website: "https://livefitgym.com/",
    notes:
      "Local fitness center with strength training, cardio, and personal coaching.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Bright Star Pilates Studio",
    city: "San Francisco",
    address: "493 Sanchez St, San Francisco, CA 94114",
    type: "Pilates",
    website: "https://www.brightstarpilates.com/",
    notes:
      "Pilates studio offering private instruction and small-group sessions.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // OAKLAND
  // =====================================

  {
    name: "Truve Fit",
    city: "Oakland",
    address: "420 14th St, Oakland, CA 94612",
    type: "Gym",
    website: "https://truvefit.com/",
    notes:
      "Strength training, HIIT, group fitness, and personal training.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "King's Boxing Gym",
    city: "Oakland",
    address: "843 35th Ave, Oakland, CA 94601",
    type: "Boxing",

    notes: 
      "Boxing training, conditioning, strength work, and youth programs.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Planet Fitness",
    city: "Oakland",
    address: "900 Market St #301, Oakland, CA 94607",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-focused fitness center with cardio and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "FITNESS SF - Oakland",
    city: "Oakland",
    address: "600 Grand Ave, Oakland, CA 94610",
    type: "Gym",
    website: "https://fitnesssf.com/",
    notes:
      "Full-service fitness center with strength, cardio, and training equipment.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Oakland",
    address: "302 49th St, Oakland, CA 94609",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates classes with options for different experience levels.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // BERKELEY
  // =====================================

  {
    name: "Berkeley YMCA",
    city: "Berkeley",
    address: "2001 Allston Way, Berkeley, CA 94704",
    type: "Fitness Center",
    website: "https://ymcaeastbay.org/",
    notes:
      "Community fitness center with cardio, strength equipment, classes, and wellness programs.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Berkeley Ironworks",
    city: "Berkeley",
    address: "800 Potter St, Berkeley, CA 94710",
    type: "Climbing + Fitness",
    website: "https://touchstoneclimbing.com/ironworks/",
    notes:
      "Climbing and fitness facility with strength equipment and training areas.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Berkeley Barbell Club",
    city: "Berkeley",
    address: "3318 Adeline St, Berkeley, CA 94703",
    type: "Strength Gym",
    website: "https://www.berkeleybarbellclub.com/",
    notes:
      "Strength-focused gym for barbell training, lifting, and conditioning.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "BODYROK Berkeley",
    city: "Berkeley",
    address: "1601 University Ave, Berkeley, CA 94703",
    type: "Pilates",
    website: "https://bodyrok.com/",
    notes:
      "Pilates-inspired full-body classes focused on strength and endurance.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Mighty Pilates Berkeley",
    city: "Berkeley",
    address: "2631 Ashby Ave Ste B, Berkeley, CA 94705",
    type: "Pilates",
    website: "https://mightypilates.com/",
    notes:
      "Reformer Pilates classes with strength, flexibility, and core-focused workouts.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // ALAMEDA
  // =====================================

  {
    name: "Alameda Fitness & Spa",
    city: "Alameda",
    address: "2227 Mariner Square Loop, Alameda, CA 94501",
    type: "Gym",
    website: "https://alamedafitnessandspa.com/Home",
    notes:
      "Gym offering cardio, strength training, fitness classes, and wellness services.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Alameda",
    address: "2651 Blanding Ave Ste D, Alameda, CA 94501",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates classes for beginners and experienced members.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Rise Bodyworks",
    city: "Alameda",
    address: "1226 Park St, Alameda, CA 94501",
    type: "Gym + Pilates",
    website: "https://www.risebodyworks.com/",
    notes:
      "Strength, cardio, Pilates, personal training, and recovery services.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Crunch Fitness - Alameda",
    city: "Alameda",
    address: "2247 S Shore Center, Alameda, CA 94501",
    type: "Gym",
    website: "https://www.crunch.com/",
    notes:
      "Fitness center offering cardio, weights, strength training, and group classes.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Orangetheory Fitness",
    city: "Alameda",
    address: "2610 5th St, Alameda, CA 94501",
    type: "Fitness Studio",
    website: "https://www.orangetheory.com/",
    notes:
      "Coach-led workouts combining cardio, rowing, and strength training.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // SAN JOSE
  // =====================================

  {
    name: "City Sports Club",
    city: "San Jose",
    address: "610 Newhall Dr, San Jose, CA 95110",
    type: "Gym",
    website: "https://www.citysportsfitness.com/",
    notes:
      "Full-service gym with cardio, weights, strength equipment, and group fitness.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "American Barbell Clubs",
    city: "San Jose",
    address: "1887 Monterey Rd Ste 100, San Jose, CA 95112",
    type: "Strength Gym",
    website: "https://americanbarbellclubs.com/",
    notes:
      "Strength-focused fitness center with free weights and training equipment.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Central YMCA",
    city: "San Jose",
    address: "1717 The Alameda, San Jose, CA 95126",
    type: "Fitness Center",
    website: "https://www.ymcasv.org/",
    notes:
      "Community fitness facility with gym equipment, classes, and wellness programs.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates Evergreen",
    city: "San Jose",
    address:
      "4055 Evergreen Village Square Suite 130, San Jose, CA 95135",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates classes for beginners through advanced members.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates Santa Teresa",
    city: "San Jose",
    address: "6057 Snell Ave, San Jose, CA 95123",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Pilates studio offering reformer-based group classes and training.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // FREMONT
  // =====================================

  {
    name: "Planet Fitness",
    city: "Fremont",
    address: "35630 Fremont Blvd, Fremont, CA 94536",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-focused fitness center with cardio and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "City Sports Club",
    city: "Fremont",
    address: "39153 Farwell Dr, Fremont, CA 94538",
    type: "Gym",
    website: "https://www.citysportsfitness.com/",
    notes:
      "Fitness club with cardio machines, weights, and group fitness options.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Fremont",
    address: "44047 Osgood Rd Ste 220, Fremont, CA 94539",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates studio with classes for different fitness levels.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "IMX Pilates & Fitness",
    city: "Fremont",
    address: "130 J St, Fremont, CA 94536",
    type: "Pilates",
    website: "https://www.imxpilates.com/",
    notes:
      "Pilates and fitness training focused on strength, flexibility, and core work.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Bay Club Fremont",
    city: "Fremont",
    address: "46650 Landing Pkwy, Fremont, CA 94538",
    type: "Fitness Center",
    website: "https://www.bayclubs.com/",
    notes:
      "Large fitness facility with strength equipment, cardio, classes, and training.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // HAYWARD
  // =====================================

  {
    name: "Planet Fitness",
    city: "Hayward",
    address: "214 B Southland Mall, Hayward, CA 94545",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-focused fitness center offering cardio and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "City Sports Club",
    city: "Hayward",
    address: "22327 Foothill Blvd, Hayward, CA 94541",
    type: "Gym",
    website: "https://www.citysportsfitness.com/",
    notes:
      "Fitness club with cardio, strength equipment, and group workouts.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Fitness 19",
    city: "Hayward",
    address: "31199 Mission Blvd, Hayward, CA 94544",
    type: "Gym",
    website: "https://www.fit19.com/",
    notes:
      "Fitness center offering strength machines, free weights, and cardio equipment.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "KORA Pilates",
    city: "Hayward",
    address: "22475 Foothill Blvd, Hayward, CA 94541",
    type: "Pilates",
    website: "https://www.kora-pilates.com",
    notes:
      "Pilates studio focused on controlled movement, core strength, and flexibility.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Hayward Strength & Glute Studio",
    city: "Hayward",
    address: "28460 Hesperian Blvd, Hayward, CA 94545",
    type: "Strength Gym",
    website:
      "https://haywardstrength.com/",
    notes:
      "Strength-focused studio offering resistance and lower-body training.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // DALY CITY
  // =====================================

  {
    name: "Fitness 19",
    city: "Daly City",
    address: "263 Lake Merced Blvd, Daly City, CA 94015",
    type: "Gym",
    website: "https://www.fit19.com/",
    notes:
      "Fitness center with free weights, cardio, and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Crunch Fitness",
    city: "Daly City",
    address: "60 Serramonte Center, Daly City, CA 94015",
    type: "Gym",
    website: "https://www.crunch.com/",
    notes:
      "Gym offering cardio, strength equipment, group classes, and personal training.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Daly City",
    address: "127F Serramonte Center, Daly City, CA 94015",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates classes focused on strength, balance, and flexibility.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Planet Fitness",
    city: "Daly City",
    address: "2945 Junipero Serra Blvd, Daly City, CA 94014",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-focused gym offering cardio and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Hot Yoga Plus Daly City",
    city: "Daly City",
    address: "203 Southgate Ave, Daly City, CA 94015",
    type: "Yoga + Pilates",
    website:
      "https://hotyogaplus-dc.com",
    notes:
      "Studio offering heated fitness, movement, yoga, and Pilates-style classes.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // SAN MATEO
  // =====================================

  {
    name: "24 Hour Fitness",
    city: "San Mateo",
    address: "93 Bovet Rd, San Mateo, CA 94402",
    type: "Gym",
    website: "https://www.24hourfitness.com/",
    notes:
      "Full-service gym with cardio machines, weights, and strength equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Peninsula Family YMCA",
    city: "San Mateo",
    address: "1877 S Grant St, San Mateo, CA 94402",
    type: "Fitness Center",
    website: "https://www.ymcasf.org/",
    notes:
      "Community fitness facility offering workouts, classes, and wellness programs.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Orangetheory Fitness",
    city: "San Mateo",
    address: "101 S B St, San Mateo, CA 94401",
    type: "Fitness Studio",
    website: "https://www.orangetheory.com/",
    notes:
      "Coach-led interval workouts combining cardio and strength training.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "RockSalt Pilates",
    city: "San Mateo",
    address: "306 E 5th Ave, San Mateo, CA 94401",
    type: "Pilates",
    website: "https://rocksaltpilates.com/",
    notes:
      "Pilates studio offering reformer workouts focused on strength and mobility.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "San Mateo",
    address: "15 N B St Ste F, San Mateo, CA 94401",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates studio with classes for beginners and experienced members.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // SOUTH SAN FRANCISCO
  // =====================================

  {
    name: "Physique Magnifique",
    city: "South San Francisco",
    address: "387 Grand Ave, South San Francisco, CA 94080",
    type: "Gym",
    website: "https://www.physiquemagnifique.com/",
    notes:
      "Local training facility offering strength, fitness classes, and personal training.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "The Fitness Tech",
    city: "South San Francisco",
    address: "303 Linden Ave, South San Francisco, CA 94080",
    type: "Fitness Center",
    website: "https://thefitnesstech.com/",
    notes:
      "Personal training gym offering small-group and large-group fitness programs.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Peninsula Barbell",
    city: "South San Francisco",
    address: "233 S Maple Ave #39, South San Francisco, CA 94080",
    type: "Strength Gym",
    website: "https://peninsulabarbell.com/",
    notes:
      "Powerlifting-focused gym offering strength equipment and training.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Compound Training Facility",
    city: "South San Francisco",
    address: "230 Miller Ave, South San Francisco, CA 94080",
    type: "Fitness Center",
    website:
      "https://www.google.com/search?q=Compound+Training+Facility+South+San+Francisco",
    notes:
      "Training facility focused on strength, conditioning, and athletic performance.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Terrabay Gymnasium & Recreation Center",
    city: "South San Francisco",
    address: "1121 S San Francisco Dr, South San Francisco, CA 94080",
    type: "Recreation Center",
    website: "https://www.ssfca.gov/",
    notes:
      "City recreation facility offering fitness, sports, and community programs.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // RICHMOND
  // =====================================

  {
    name: "Planet Fitness",
    city: "Richmond",
    address: "4925 Macdonald Ave, Richmond, CA 94805",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-focused gym with cardio, strength, and functional training equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Bay Area Barbell",
    city: "Richmond",
    address: "1200 Harbour Way S Unit 105, Richmond, CA 94804",
    type: "Strength Gym",
    website: "https://www.bayareabarbell.com/",
    notes:
      "Powerlifting, Olympic lifting, strength training, and barbell-focused workouts.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Traverse Fitness",
    city: "Richmond",
    address: "1 W Barrett Ave, Richmond, CA 94801",
    type: "Fitness Center",
    website: "https://www.traversefit.com/",
    notes:
      "Fitness and obstacle training with strength and conditioning programs.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "City Sports Club",
    city: "Richmond",
    address: "4100 Klose Way, Richmond, CA 94806",
    type: "Gym",
    website: "https://www.citysportsfitness.com/",
    notes:
      "Large fitness club with cardio equipment, weights, and training areas.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Richmond Parkway YMCA",
    city: "Richmond",
    address: "4300 Lakeside Dr, Richmond, CA 94806",
    type: "Fitness Center",
    website: "https://ymcaeastbay.org/",
    notes:
      "Community fitness center offering gym equipment, classes, and wellness programs.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // WALNUT CREEK
  // =====================================

  {
    name: "Planet Fitness",
    city: "Walnut Creek",
    address: "1697 Mt Diablo Blvd, Walnut Creek, CA 94596",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Budget-friendly gym with cardio, strength, and functional training equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Walnut Creek",
    address: "1576 Botelho Dr, Walnut Creek, CA 94596",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates studio offering classes for multiple fitness levels.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Contra Costa Pilates Center",
    city: "Walnut Creek",
    address: "1280 Boulevard Way #210, Walnut Creek, CA 94595",
    type: "Pilates",
    website: "https://www.contracostapilatescenter.com/",
    notes:
      "Pilates studio offering private and semi-private instruction.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "The Hundred & More",
    city: "Walnut Creek",
    address: "2125 Ygnacio Valley Rd #109, Walnut Creek, CA 94596",
    type: "Pilates",
    website:
      "https://www.thehundredandmore.com",
    notes:
      "Pilates studio focused on strength, movement, balance, and mobility.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "BODYROK Walnut Creek",
    city: "Walnut Creek",
    address: "1380 N California Blvd, Walnut Creek, CA 94596",
    type: "Pilates",
    website: "https://bodyrok.com/",
    notes:
      "Pilates-inspired fitness studio offering strength-focused reformer workouts.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },


  // =====================================
  // CONCORD
  // =====================================

  {
    name: "Planet Fitness",
    city: "Concord",
    address: "3375 Port Chicago Hwy Suite 51, Concord, CA 94520",
    type: "Gym",
    website: "https://www.planetfitness.com/",
    notes:
      "Affordable gym offering cardio, strength, and functional training equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Delta Athletics",
    city: "Concord",
    address: "2956 Treat Blvd H, Concord, CA 94518",
    type: "Gym + Pilates",
    website: "https://www.concord-crossfit.com/",
    notes:
      "Fitness center offering strength training, classes, and athletic conditioning.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Contra Costa Fitness",
    city: "Concord",
    address: "Concord, CA",
    type: "Fitness Center",
    website: "https://www.contracostafitness.com/",
    notes:
      "Fitness studio offering strength training, workout classes, and movement programs.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Club Pilates",
    city: "Concord",
    address: "5442 Ygnacio Valley Rd Ste 70, Concord, CA 94521",
    type: "Pilates",
    website: "https://www.clubpilates.com/",
    notes:
      "Reformer Pilates studio with classes for beginners through experienced members.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Muuv",
    city: "Concord",
    address: "1950 Concord Ave Ste B, Concord, CA 94520",
    type: "Pilates",
    website: "https://www.studiomuuv.com/",
    notes:
      "Low-impact fitness studio combining Pilates-inspired movement and conditioning.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  }
];


// =====================================
// GET HTML ELEMENTS
// =====================================

const searchInput = document.getElementById("location-search");
const searchButton = document.getElementById("search-btn");
const searchStatus = document.getElementById("search-status");
const resultsTitle = document.getElementById("results-title");
const gymList = document.getElementById("gym-list");
const noResults = document.getElementById("no-results");
const sortOptions = document.getElementById("sort-options");
const cityButtons = document.querySelectorAll(".city-button");


// =====================================
// CLEAN / UNDERSTAND CITY SEARCHES
// =====================================

function cleanCityName(city) {
  const cleaned = city.trim().toLowerCase();

  const aliases = {
    sf: "san francisco",
    "san fran": "san francisco",
    "san francisco ca": "san francisco",

    oak: "oakland",
    "oakland ca": "oakland",

    sj: "san jose",
    "san jose ca": "san jose",

    "south sf": "south san francisco",
    ssf: "south san francisco",

    "daly city ca": "daly city",
    "san mateo ca": "san mateo",
    "walnut creek ca": "walnut creek",
    "richmond ca": "richmond",
    "concord ca": "concord",
    "berkeley ca": "berkeley",
    "alameda ca": "alameda",
    "fremont ca": "fremont",
    "hayward ca": "hayward"
  };

  return aliases[cleaned] || cleaned;
}


// =====================================
// FORMAT CITY NAME
// =====================================

function formatCityName(city) {
  return city
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}


// =====================================
// PERSONALIZED GYM IMAGE / LOGO
// =====================================

function getGymImage(gym) {

  // If the gym has a real website,
  // try to display branding from that website.
  if (
    gym.website &&
    !gym.website.includes("google.com/search")
  ) {
    try {
      const websiteURL = new URL(gym.website);

      const domain = websiteURL.hostname;

      return (
        "https://www.google.com/s2/favicons?sz=256&domain=" +
        encodeURIComponent(domain)
      );

    } catch (error) {
      console.log(
        "Could not create personalized image for:",
        gym.name
      );
    }
  }

  // If the business intentionally has no website,
  // keep its existing image.
  return gym.image;
}


// =====================================
// DISPLAY GYM CARDS
// =====================================

function displayGyms(gymArray) {

  gymList.innerHTML = "";

  if (gymArray.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  gymArray.forEach(function (gym) {

    const card = document.createElement("article");

    card.className = "gym-card";


    // -------------------------------------
    // GOOGLE MAPS LINK
    // -------------------------------------

    const mapLink =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(gym.address);


    // -------------------------------------
    // WEBSITE BUTTON
    // -------------------------------------

    let websiteButton = "";

    if (gym.website) {

      websiteButton = `
        <a
          class="gym-link website-link"
          href="${gym.website}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website →
        </a>
      `;

    }


    // -------------------------------------
    // BUILD CARD
    // -------------------------------------

    card.innerHTML = `

      <div class="gym-image-container">

        <img
          class="gym-image gym-logo"
          src="${getGymImage(gym)}"
          alt="${gym.name}"
          data-fallback="${gym.image}"
        />

      </div>


      <div class="gym-content">


        <div class="gym-top-row">

          <span class="budget-badge">
            ${gym.type}
          </span>

        </div>


        <h3 class="gym-name">
          ${gym.name}
        </h3>


        <p class="gym-location">
          ${gym.city}, CA
        </p>


        <p class="gym-address">
          ${gym.address}
        </p>


        <p class="gym-focus">
          ${gym.notes}
        </p>


        <div class="gym-links">

          <a
            class="gym-link location-link"
            href="${mapLink}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location →
          </a>

          ${websiteButton}

        </div>


      </div>
    `;


    // -------------------------------------
    // IMAGE FALLBACK
    // -------------------------------------

    const cardImage =
      card.querySelector(".gym-image");

    cardImage.addEventListener(
      "error",
      function () {

        const fallback =
          cardImage.dataset.fallback;

        if (
          fallback &&
          cardImage.src !== fallback
        ) {

          cardImage.src = fallback;

        }

      }
    );


    gymList.appendChild(card);

  });

}


// =====================================
// SEARCH GYMS BY CITY
// =====================================

function searchGyms() {

  const searchCity =
    cleanCityName(searchInput.value);


  // -------------------------------------
  // EMPTY SEARCH
  // -------------------------------------

  if (searchCity === "") {

    displayGyms(gyms);

    resultsTitle.textContent =
      "Affordable gyms near you";

    searchStatus.textContent =
      "Enter a Bay Area city to start your search.";

    return;

  }


  // -------------------------------------
  // FIND MATCHING CITY
  // -------------------------------------

  const matchingGyms =
    gyms.filter(function (gym) {

      return (
        gym.city.toLowerCase() ===
        searchCity
      );

    });


  const cityName =
    formatCityName(searchCity);


  // -------------------------------------
  // RESULTS FOUND
  // -------------------------------------

  if (matchingGyms.length > 0) {

    resultsTitle.textContent =
      `Gyms & Pilates in ${cityName}`;

    searchStatus.textContent =
      `Found ${matchingGyms.length} fitness options in ${cityName}.`;

  }


  // -------------------------------------
  // NO RESULTS
  // -------------------------------------

  else {

    resultsTitle.textContent =
      `Fitness options in ${cityName}`;

    searchStatus.textContent =
      `We don't have listings for ${cityName} yet. Try another Bay Area city.`;

  }


  displayGyms(matchingGyms);


  // -------------------------------------
  // SCROLL TO RESULTS
  // -------------------------------------

  const resultsSection =
    document.getElementById(
      "results-section"
    );


  if (resultsSection) {

    resultsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


// =====================================
// SEARCH BUTTON
// =====================================

searchButton.addEventListener(
  "click",
  function () {

    searchGyms();

  }
);


// =====================================
// PRESS ENTER TO SEARCH
// =====================================

searchInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      searchGyms();

    }

  }
);


// =====================================
// CITY BUTTONS
// =====================================

cityButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const city =
          button.dataset.searchCity;

        searchInput.value =
          formatCityName(city);

        searchGyms();

      }
    );

  }
);


// =====================================
// SORT RESULTS
// =====================================

if (sortOptions) {

  sortOptions.addEventListener(
    "change",
    function () {

      const option =
        sortOptions.value;


      const searchCity =
        cleanCityName(
          searchInput.value
        );


      let currentGyms;


      // ---------------------------------
      // GET CURRENT CITY RESULTS
      // ---------------------------------

      if (searchCity !== "") {

        currentGyms =
          gyms.filter(
            function (gym) {

              return (
                gym.city.toLowerCase() ===
                searchCity
              );

            }
          );

      } else {

        currentGyms = [...gyms];

      }


      // ---------------------------------
      // SORT A-Z
      // ---------------------------------

      if (option === "name") {

        currentGyms.sort(
          function (a, b) {

            return a.name.localeCompare(
              b.name
            );

          }
        );

      }


      // ---------------------------------
      // SORT BY TYPE
      // ---------------------------------

      if (option === "type") {

        currentGyms.sort(
          function (a, b) {

            return a.type.localeCompare(
              b.type
            );

          }
        );

      }


      displayGyms(currentGyms);

    }
  );

}


// =====================================
// CLEAR SEARCH
// =====================================

searchInput.addEventListener(
  "input",
  function () {

    if (
      searchInput.value.trim() === ""
    ) {

      displayGyms(gyms);

      resultsTitle.textContent =
        "Affordable gyms near you";

      searchStatus.textContent =
        "Enter a Bay Area city to start your search.";

    }

  }
);


// =====================================
// LOAD WEBSITE
// =====================================

displayGyms(gyms);