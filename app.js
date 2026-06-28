const DB = (() => {
  const planFit = [
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x1','Full Body Blast LV1 10 min x1','Steady State 10 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x1','Full Body Blast LV1 10 min x1','Steady State 15 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x2','Full Body Blast LV1 10 min x1','Steady State 20 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x2','Full Body Blast LV1 10 min x1','Steady State 30 min x3','0'],
    ['Progression','Ripped and Ready x3','0','Core Conquerer 10 min x1','Full Body Blast LV2 10 min x1','Steady State 20 min x3','HIIT 10 min x2'],
    ['Progression','Ripped and Ready x3','0','Core Conquerer 10 min x2','Full Body Blast LV2 10 min x1','Steady State 30 min x3','HIIT 10 min x2'],
    ['Progression','Ripped and Ready x3','0','Core Conquerer 15 min x2','Full Body Blast LV2 10 min x1','Steady State 30 min x3','HIIT 10 min x3'],
    ['Progression','Ripped and Ready x3','0','Core Conquerer 15 min x1','Full Body Blast LV2 10 min x1','Steady State 40 min x3','HIIT 10 min x3'],
    ['Ultimate','Extreme Fit x3','0','Killer Core 20 min x1','Full Body Blast LV3 10 min x1','Steady State 30 min x3','HIIT 10 min x3'],
    ['Ultimate','Extreme Fit x3','0','Killer Core 20 min x2','Full Body Blast LV3 10 min x1','Steady State 40 min x3','HIIT 10 min x3'],
    ['Ultimate','Extreme Fit x3','0','Killer Core 30 min x1','Full Body Blast LV3 10 min x1','Steady State 40 min x3','HIIT 15 min x3'],
    ['Ultimate','Extreme Fit x3','0','Killer Core 30 min x2','Full Body Blast LV3 10 min x1','Steady State 60 min x3','HIIT 20 min x3'],
  ];
  const planBuilt = [
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x1','Full Body Blast LV1 10 min x1','Steady State 10 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x1','Full Body Blast LV1 10 min x1','Steady State 10 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x2','Full Body Blast LV1 10 min x1','Steady State 10 min x3','0'],
    ['Foundation','Foundation Builder x3','Pull-Up & Dip Trainer 10 min x5','Core Elements 5 min x2','Full Body Blast LV1 10 min x1','Steady State 10 min x3','0'],
    ['Progression','Muscle Builder x3','0','Core Conquerer 10 min x1','Full Body Blast LV2 10 min x1','Steady State 10 min x1','HIIT 10 min x2'],
    ['Progression','Muscle Builder x3','0','Core Conquerer 10 min x2','Full Body Blast LV2 10 min x1','Steady State 10 min x1','HIIT 10 min x2'],
    ['Progression','Muscle Builder x3','0','Core Conquerer 15 min x1','Full Body Blast LV2 10 min x1','Steady State 10 min x1','HIIT 10 min x2'],
    ['Progression','Muscle Builder x3','0','Core Conquerer 15 min x2','Full Body Blast LV2 10 min x1','Steady State 10 min x1','HIIT 10 min x2'],
    ['Ultimate','Hardcore Strength x3','0','Killer Core 20 min x1','Full Body Blast LV3 10 min x1','0','HIIT 10 min x3'],
    ['Ultimate','Hardcore Strength x3','0','Killer Core 20 min x2','Full Body Blast LV3 10 min x1','0','HIIT 10 min x3'],
    ['Ultimate','Hardcore Strength x3','0','Killer Core 30 min x1','Full Body Blast LV3 10 min x1','0','HIIT 10 min x3'],
    ['Ultimate','Hardcore Strength x3','0','Killer Core 30 min x2','Full Body Blast LV3 10 min x1','0','HIIT 10 min x3'],
  ];
  const weekPlan = (pathway) => (pathway === 'built' ? planBuilt : planFit).map((r,i)=>({week:i+1,phase:r[0],main:r[1],trainer:r[2],core:r[3],blast:r[4],steady:r[5],hiit:r[6]}));

  const IMAGE_OVERRIDES = {
  "alternating-forward-lunge": "assets/images/alternating-forward-lunge.webp",
  "alternating-pistol-squat": "assets/images/alternating-pistol-squat.webp",
  "alternating-reverse-lunge": "assets/images/alternating-reverse-lunge.webp",
  "bent-hips-inverted-row": "assets/images/bent-hips-inverted-row.webp",
  "bent-hips-underhand-grip-inverted-row": "assets/images/bent-hips-underhand-grip-inverted-row.webp",
  "bent-hips-wide-grip-inverted-row": "assets/images/bent-hips-wide-grip-inverted-row.webp",
  "broad-jump": "assets/images/broad-jump.webp",
  "bulgarian-split-squat": "assets/images/bulgarian-split-squat.webp",
  "burpee": "assets/images/burpee.webp",
  "calf-raise": "assets/images/calf-raise.webp",
  "close-grip-chin-up": "assets/images/close-grip-chin-up.webp",
  "copenhagen-side-plank": "assets/images/copenhagen-side-plank.webp",
  "dead-hang": "assets/images/dead-hang.webp",
  "decline-press-up": "assets/images/decline-press-up.webp",
  "decline-shoulder-press": "assets/images/decline-shoulder-press.webp",
  "dip-position-hold-at-the-bottom": "assets/images/dip-position-hold-at-the-bottom.webp",
  "dip-position-hold-at-the-top": "assets/images/dip-position-hold-at-the-top.webp",
  "donkey-kick": "assets/images/donkey-kick.webp",
  "downfacing-high-bent-hip-dips": "assets/images/downfacing-high-bent-hip-dips.webp",
  "downfacing-high-dips": "assets/images/downfacing-high-dips.webp",
  "fire-hydrant": "assets/images/fire-hydrant.webp",
  "forward-leaning-tricep-extension": "assets/images/forward-leaning-tricep-extension.webp",
  "frog-pump": "assets/images/frog-pump.webp",
  "glute-bridge": "assets/images/glute-bridge.webp",
  "hanging-alternating-oblique-crunch": "assets/images/hanging-alternating-oblique-crunch.webp",
  "hanging-alternating-straight-leg-oblique-crunch": "assets/images/hanging-alternating-straight-leg-oblique-crunch.webp",
  "hanging-bent-knee-toes-to-bar": "assets/images/hanging-bent-knee-toes-to-bar.webp",
  "hanging-knee-raise": "assets/images/hanging-knee-raise.webp",
  "hanging-leg-raise": "assets/images/hanging-leg-raise.webp",
  "hanging-straight-leg-scissors": "assets/images/hanging-straight-leg-scissors.webp",
  "hanging-straight-leg-toes-to-bar": "assets/images/hanging-straight-leg-toes-to-bar.webp",
  "hanging-windshield-wipers-180": "assets/images/hanging-windshield-wipers-180.webp",
  "high-plyo-press-up": "assets/images/high-plyo-press-up.webp",
  "jump-squat": "assets/images/jump-squat.webp",
  "jumping-chin-up-w-slow-negative": "assets/images/jumping-chin-up-w-slow-negative.webp",
  "jumping-jack": "assets/images/jumping-jack.webp",
  "jumping-neutral-grip-pull-up-w-slow-negative": "assets/images/jumping-neutral-grip-pull-up-w-slow-negative.webp",
  "jumping-wide-grip-pull-up-w-slow-negative": "assets/images/jumping-wide-grip-pull-up-w-slow-negative.webp",
  "l-sit-chin-up": "assets/images/l-sit-chin-up.webp",
  "l-sit-hold": "assets/images/l-sit-hold.webp",
  "l-sit-scissors": "assets/images/l-sit-scissors.webp",
  "l-sit-wide-grip-pull-up": "assets/images/l-sit-wide-grip-pull-up.webp",
  "low-alternating-high-low-plyo-press-up": "assets/images/low-alternating-high-low-plyo-press-up.webp",
  "low-plyo-press-up": "assets/images/low-plyo-press-up.webp",
  "low-press-up": "assets/images/low-press-up.webp",
  "mountain-climber": "assets/images/mountain-climber.webp",
  "neutral-grip-scapula-retraction": "assets/images/neutral-grip-scapula-retraction.webp",
  "partial-dips-bottom-half": "assets/images/partial-dips-bottom-half.webp",
  "partial-dips-top-half": "assets/images/partial-dips-top-half.webp",
  "partial-wide-grip-pull-up-bottom-half": "assets/images/partial-wide-grip-pull-up-bottom-half.webp",
  "partial-wide-grip-pull-up-top-half": "assets/images/partial-wide-grip-pull-up-top-half.webp",
  "pistol-squat": "assets/images/pistol-squat.webp",
  "plank": "assets/images/plank.webp",
  "press-up-planche-to-l-sit": "assets/images/press-up-planche-to-l-sit.webp",
  "pull-up": "assets/images/pull-up.webp",
  "raised-feet-close-grip-press-ups": "assets/images/raised-feet-close-grip-press-ups.webp",
  "raised-feet-straight-leg-rear-dips": "assets/images/raised-feet-straight-leg-rear-dips.webp",
  "raised-feet-wide-grip-press-ups": "assets/images/raised-feet-wide-grip-press-ups.webp",
  "reverse-lunge": "assets/images/reverse-lunge.webp",
  "shoulders-elevated-hip-raise": "assets/images/shoulders-elevated-hip-raise.webp",
  "side-lying-clam": "assets/images/side-lying-clam.webp",
  "single-leg-box-squat": "assets/images/single-leg-box-squat.webp",
  "single-leg-glute-bridge": "assets/images/single-leg-glute-bridge.webp",
  "single-leg-jump-squat": "assets/images/single-leg-jump-squat.webp",
  "single-leg-romanian-deadlift": "assets/images/single-leg-romanian-deadlift.webp",
  "single-leg-shoulders-elevated-hip-raise": "assets/images/single-leg-shoulders-elevated-hip-raise.webp",
  "sit-up": "assets/images/sit-up.webp",
  "skater-jump": "assets/images/skater-jump.webp",
  "squat-calf-raise": "assets/images/squat-calf-raise.webp",
  "squat": "assets/images/squat.webp",
  "step-up": "assets/images/step-up.webp",
  "stiff-leg-ankle-hop": "assets/images/stiff-leg-ankle-hop.webp",
  "straight-bar-close-grip-press-ups": "assets/images/straight-bar-close-grip-press-ups.webp",
  "straight-bar-press-ups": "assets/images/straight-bar-press-ups.webp",
  "straight-bar-wide-grip-press-ups": "assets/images/straight-bar-wide-grip-press-ups.webp",
  "strict-inverted-row": "assets/images/strict-inverted-row.webp",
  "strict-neutral-grip-inverted-row": "assets/images/strict-neutral-grip-inverted-row.webp",
  "strict-underhand-close-grip-inverted-row": "assets/images/strict-underhand-close-grip-inverted-row.webp",
  "strict-wide-grip-inverted-row": "assets/images/strict-wide-grip-inverted-row.webp",
  "sumo-squat": "assets/images/sumo-squat.webp",
  "suspended-alternating-straight-leg-oblique-crunch": "assets/images/suspended-alternating-straight-leg-oblique-crunch.webp",
  "suspended-knee-raise": "assets/images/suspended-knee-raise.webp",
  "suspended-leg-raise": "assets/images/suspended-leg-raise.webp",
  "suspended-windshield-wipers-360": "assets/images/suspended-windshield-wipers-360.webp",
  "tuck-jump": "assets/images/tuck-jump.webp",
  "wide-grip-dead-hang": "assets/images/wide-grip-dead-hang.webp",
  "wide-grip-pull-up-behind-the-neck": "assets/images/wide-grip-pull-up-behind-the-neck.webp",
  "wide-grip-pull-up": "assets/images/wide-grip-pull-up.webp",
};
  const ex = (name, muscles='Full Body', img=null, tip='Esegui il movimento con controllo e forma pulita.', mistakes=['Perdere il controllo del movimento','Compensare con slancio eccessivo','Ignorare dolore articolare']) => { const id = slug(name); return {id, name, muscles, img: IMAGE_OVERRIDES[id] || img || `assets/images/${id}.webp`, tip, mistakes}; };
  const exercises = [
    ex('Pull Up','Back, Biceps','assets/images/pull-up.webp','Scapole attive, tira il petto verso la barra e controlla la discesa.'),
    ex('Wide Grip Pull Up','Back, Biceps','assets/images/wide-grip-pull-up.webp','Mantieni scapole retratte e presa larga stabile.'),
    ex('Chin Up','Back, Biceps','assets/images/chin-up.webp','Presa supina, petto alto, evita oscillazioni.'),
    ex('Neutral Grip Pull Up','Back, Biceps','assets/images/neutral-grip-pull-up.webp','Presa neutra e gomiti verso il basso.'),
    ex('L-Sit Chin up','Back, Biceps, Core','assets/images/l-sit-chin-up.webp'),
    ex('L-Sit Wide-Grip Pull-Up','Back, Biceps, Core','assets/images/l-sit-wide-grip-pull-up.webp'),
    ex('Inverted Row','Back, Biceps','assets/images/inverted-row.webp','Corpo in linea, tira il petto verso la barra.'),
    ex('Strict Inverted Row','Back, Biceps','assets/images/strict-inverted-row.webp','Glutei e core contratti, niente slancio.'),
    ex('Strict Underhand-Grip Inverted Row','Back, Biceps','assets/images/strict-underhand-grip-inverted-row.webp'),
    ex('Strict Neutral-Grip Inverted Row','Back, Biceps'),
    ex('Strict Wide-Grip Inverted Row','Back, Biceps'),
    ex('Bent-Hips Wide-Grip Inverted Row','Back, Biceps'),
    ex('Bent-Hips Underhand-Grip Inverted Row','Back, Biceps'),
    ex('Bent-Hips Inverted Row','Back, Biceps'),
    ex('Dips','Triceps, Chest, Shoulders','assets/images/dips.webp','Petto alto, gomiti controllati, scendi senza fastidio alle spalle.'),
    ex('High Straight-Bar Dip','Triceps, Chest, Shoulders','assets/images/high-straight-bar-dip.webp'),
    ex('Partial Dips (top half)','Triceps, Chest, Shoulders'),
    ex('Partial Dips (bottom half)','Triceps, Chest, Shoulders'),
    ex('Downfacing High Dips','Triceps, Chest, Shoulders'),
    ex('Downfacing High Bent-Hip Dips','Triceps, Chest, Shoulders'),
    ex('Low Press Up','Chest, Triceps','assets/images/low-press-up.webp','Core e glutei attivi, scendi controllato senza collassare sulle spalle.'),
    ex('Decline Press Up','Chest, Triceps, Shoulders','assets/images/decline-press-up.webp','Bacino leggermente alto, linea stabile.'),
    ex('Straight-Bar Press Ups','Chest, Triceps','assets/images/straight-bar-press-ups.webp'),
    ex('Straight-Bar Wide-Grip Press Ups','Chest, Triceps','assets/images/straight-bar-wide-grip-press-ups.webp'),
    ex('Straight-Bar Close-Grip Press ups','Triceps, Chest','assets/images/straight-bar-close-grip-press-ups.webp'),
    ex('High Plyo Press Up','Chest, Triceps','assets/images/high-plyo-press-up.webp'),
    ex('Low Plyo Press Up','Chest, Triceps','assets/images/low-plyo-press-up.webp'),
    ex('Decline Shoulder Press','Shoulders, Triceps','assets/images/decline-shoulder-press.webp'),
    ex('Forward Leaning Tricep Extension','Triceps, Chest, Back'),
    ex('Raised Feet Wide-Grip Press Ups','Chest, Triceps, Shoulders','assets/images/raised-feet-wide-grip-press-ups.webp'),
    ex('Raised Feet Close-Grip Press ups','Chest, Triceps, Shoulders','assets/images/raised-feet-close-grip-press-ups.webp'),
    ex('Raised Feet Straight Leg Rear Dips','Triceps, Shoulders, Chest'),
    ex('Squat','Quads, Glutes, Hamstrings','assets/images/squat.webp','Ginocchia verso l’esterno, petto alto, scendi almeno a cosce parallele.'),
    ex('Bulgarian Split Squat','Quads, Glutes, Hamstrings','assets/images/bulgarian-split-squat.webp'),
    ex('Single-Leg Box Squat','Quads, Glutes, Hamstrings','assets/images/single-leg-box-squat.webp'),
    ex('Single-Leg Romanian Deadlift','Hamstrings, Glutes','assets/images/single-leg-romanian-deadlift.webp'),
    ex('Glute Bridge','Glutes, Hamstrings','assets/images/glute-bridge.webp','Spingi dai talloni e tieni le costole basse per concentrare il lavoro sui glutei.', ['Iperestendere la schiena','Ginocchia che collassano all’interno','Spingere solo con la punta dei piedi']),
    ex('Single-Leg Glute Bridge','Glutes, Hamstrings','assets/images/single-leg-glute-bridge.webp','Mantieni il bacino parallelo al pavimento durante tutta la salita.', ['Ruotare il bacino','Inarcare la schiena','Perdere tensione nella gamba sollevata']),
    ex('Shoulders-Elevated Hip Raise','Glutes, Hamstrings','assets/images/shoulders-elevated-hip-raise.webp','Chiudi leggermente il bacino in alto per sentire meglio i glutei.', ['Iperestendere la schiena','Spingere sulle punte','Aprire troppo le ginocchia']),
    ex('Calf-Raise','Calves','assets/images/calf-raise.webp','Fai una pausa in alto e una discesa controllata per sentire meglio i polpacci.', ['Rimbalzare troppo veloce','Far collassare le caviglie','Usare solo mezzo movimento']),
    ex('Squat Calf-Raise','Calves','assets/images/squat-calf-raise.webp'),
    ex('Stiff-Leg Ankle Hop','Calves','assets/images/stiff-leg-ankle-hop.webp'),
    ex('Jump Squat','Cardiovascular','assets/images/jump-squat.webp'),
    ex('Tuck Jump','Cardiovascular','assets/images/tuck-jump.webp'),
    ex('Skater Jump','Quads, Glutes, Adductors','assets/images/skater-jump.webp'),
    ex('Broad Jump','Cardiovascular','assets/images/broad-jump.webp'),
    ex('Burpee','Cardiovascular','assets/images/burpee.webp','Atterra morbido, mantieni ritmo e controllo.'),
    ex('Mountain Climber','Full Body','assets/images/mountain-climber.webp'),
    ex('Alternate Running Plank','Core'),
    ex('Jumping Jack','Cardiovascular','assets/images/jumping-jack.webp'),
    ex('Hanging Leg Raise','Core, Arms','assets/images/hanging-leg-raise.webp','Controlla bacino e addome, evita oscillazioni.'),
    ex('Hanging Knee Raise','Core, Arms'),
    ex('Hanging Straight Leg Toes to Bar','Core, Arms'),
    ex('Suspended Leg Raise','Core, Arms'),
    ex('Suspended Knee Raise','Core, Arms'),
    ex('Hanging Alternating Oblique Crunch','Core, Arms'),
    ex('Hanging Straight-Leg Scissors','Core, Arms'),
    ex('L-Sit Scissors','Core, Arms'),
    ex('Plank','Core','assets/images/plank.webp','Gomiti sotto le spalle, glutei contratti, corpo in linea.'),
    ex('Side Plank','Core'),
    ex('Sit-Up','Core','assets/images/sit-up.webp'),
    ex('Crunch','Core'),
    ex('Bicycle','Core'),
    ex('Twisting Sit-Up','Core'),
    ex('Dead Hang','Grip, Forearms, Core','assets/images/dead-hang.webp','Presa solida, core leggermente attivo, spalle controllate.'),
    ex('Wide-Grip Dead Hang','Grip, Forearms, Core'),
    ex('Pistol Squat','Quads, Glutes, Hamstrings','assets/images/pistol-squat.webp'),
    ex('Single-Leg Shoulders Elevated Hip Raise','Glutes, Hamstrings'),
    ex('Side Lying Clam','Glutes, Hips','assets/images/side-lying-clam.webp','Movimento piccolo ma preciso: meglio lento che alto e scomposto.', ['Ruotare indietro il bacino','Separare i piedi','Alzare troppo la gamba senza controllo']),
    ex('Donkey Kick','Glutes','assets/images/donkey-kick.webp','Il movimento parte dal gluteo: tieni il ginocchio piegato a circa 90°.', ['Inarcare la zona lombare','Aprire il bacino','Slanciare la gamba senza controllo']),
    ex('Fire Hydrant','Glutes, Hips',null,'Blocca il bacino e apri il ginocchio lateralmente senza ruotare il busto.', ['Ruotare il busto','Inarcare la schiena','Aprire troppo velocemente']),
    ex('Frog Pump','Glutes, Adductors',null,'Fai una pausa breve in alto e stringi forte i glutei.', ['Spingere con la zona lombare','Chiudere troppo le ginocchia','Perdere contatto tra i piedi']),
    ex('Copenhagen Side Plank','Adductors, Obliques',null,'Inizia con il ginocchio sul rialzo se la versione completa è troppo intensa.', ['Far cadere il bacino','Spalla collassata','Ruotare il busto in avanti']),
    ex('Alternating Pistol Squat','Quads, Glutes, Hamstrings','assets/images/alternating-pistol-squat.webp'),
    ex('Suspended Windshield Wipers 360','Core, Arms'),
    ex('Hanging Windshield Wipers 180','Core, Arms'),
    ex('L-Sit Hold','Core, Arms'),
    ex('Side Crunch','Core'),
    ex('Hanging Alternating Straight-Leg Oblique Crunch','Core, Arms'),
    ex('Suspended Alternating Straight-Leg Oblique Crunch','Core, Arms'),
    ex('Hanging Bent Knee Toes to Bar','Core, Arms'),
    ex('Low Alternating High-Low Plyo Press Up','Chest, Triceps','assets/images/low-alternating-high-low-plyo-press-up.webp'),
    ex('Wide Grip Pull Up Behind the Neck','Back, Biceps','assets/images/wide-grip-pull-up-behind-the-neck.webp'),
    ex('Partial Wide Grip Pull Up (bottom half)','Back, Biceps','assets/images/partial-wide-grip-pull-up-bottom-half.webp'),
    ex('Partial Wide Grip Pull Up (top half)','Back, Biceps','assets/images/partial-wide-grip-pull-up-top-half.webp'),
    ex('Neutral Grip Scapula Retraction','Back, Biceps','assets/images/neutral-grip-scapula-retraction.webp'),
    ex('Strict Underhand Close-Grip Inverted Row','Biceps, Back'),
    ex('Alternating Forward Lunge','Quads, Glutes, Hamstrings','assets/images/alternating-forward-lunge.webp'),
    ex('Alternating Reverse Lunge','Quads, Glutes, Hamstrings','assets/images/alternating-reverse-lunge.webp'),
    ex('Sumo Squat','Quads, Glutes, Hamstrings','assets/images/sumo-squat.webp'),
    ex('Bent-Hips Underhand Close-Grip Inverted Row','Back, Biceps, Rear delts',null,'Mantieni corpo in linea e tira il petto verso la barra senza slancio.', ["Perdere la linea del corpo", "Tirare solo con le braccia", "Lasciare cadere le scapole"]),
    ex('Close Grip Chin up','Back, Biceps, Core','assets/images/close-grip-chin-up.webp','Attiva le scapole prima di tirare e controlla sempre la discesa.', ["Partire con spalle passive", "Dondolare con le gambe", "Tagliare la discesa"]),
    ex('Dip Position Hold (at the bottom)','Triceps, Chest, Shoulders','assets/images/dip-position-hold-at-the-bottom.webp','Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Dip Position Hold (at the top)','Triceps, Chest, Shoulders','assets/images/dip-position-hold-at-the-top.webp','Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Downfacing Low Bent-Hip Dips','Triceps, Chest, Shoulders',null,'Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Jumping Chin up w/ Slow Negative','Back, Biceps, Core','assets/images/jumping-chin-up-w-slow-negative.webp','Attiva le scapole prima di tirare e controlla sempre la discesa.', ["Partire con spalle passive", "Dondolare con le gambe", "Tagliare la discesa"]),
    ex('Jumping Dip w/ Slow Negative','Triceps, Chest, Shoulders',null,'Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Jumping Neutral Grip Pull Up w/ Slow Negative','Back, Biceps, Forearms','assets/images/jumping-neutral-grip-pull-up-w-slow-negative.webp','Attiva le scapole prima di tirare e controlla sempre la discesa.', ["Partire con spalle passive", "Dondolare con le gambe", "Tagliare la discesa"]),
    ex('Jumping Wide Grip Pull Up w/ Slow Negative','Back, Biceps, Forearms','assets/images/jumping-wide-grip-pull-up-w-slow-negative.webp','Attiva le scapole prima di tirare e controlla sempre la discesa.', ["Partire con spalle passive", "Dondolare con le gambe", "Tagliare la discesa"]),
    ex('Press Up Planche to L-Sit','Chest, Triceps, Shoulders','assets/images/press-up-planche-to-l-sit.webp','Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Raised Feet Straight Leg Rear Underhand dips','Triceps, Chest, Shoulders',null,'Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Reverse Crunch','Core',null,'Muovi dal bacino/addome, non dal collo: espira nella fase difficile.', ["Tirare il collo", "Compensare con slancio", "Perdere retroversione del bacino"]),
    ex('Reverse Lunge','Quads, Glutes, Hamstrings','assets/images/reverse-lunge.webp','Mantieni ginocchia stabili, appoggio saldo e controllo nella fase di discesa.', ["Far collassare il ginocchio", "Perdere il peso sul tallone", "Eseguire mezze ripetizioni frettolose"]),
    ex('Scapula Retraction','Full body, Technique',null,'Attiva le scapole prima di tirare e controlla sempre la discesa.', ["Partire con spalle passive", "Dondolare con le gambe", "Tagliare la discesa"]),
    ex('Single-Leg Jump Squat','Quads, Glutes, Core','assets/images/single-leg-jump-squat.webp','Mantieni ginocchia stabili, appoggio saldo e controllo nella fase di discesa.', ["Far collassare il ginocchio", "Perdere il peso sul tallone", "Eseguire mezze ripetizioni frettolose"]),
    ex('Step-Up','Quads, Glutes','assets/images/step-up.webp','Mantieni ginocchia stabili, appoggio saldo e controllo nella fase di discesa.', ["Far collassare il ginocchio", "Perdere il peso sul tallone", "Eseguire mezze ripetizioni frettolose"]),
    ex('Straight Leg Rear Dips','Triceps, Chest, Shoulders',null,'Core e glutei attivi: scendi controllato e spingi senza collassare sulle spalle.', ["Allargare troppo i gomiti", "Inarcare la zona lombare", "Rimbalzare in basso"]),
    ex('Superman','Lower back, Glutes',null,'Muovi dal bacino/addome, non dal collo: espira nella fase difficile.', ["Tirare il collo", "Compensare con slancio", "Perdere retroversione del bacino"])
  ];

  const E = (name, sets, reps, tempo, rest) => ({exercise_id:slug(name), name, sets, reps, tempo, rest});
  const workouts = {
    'foundation-a': {title:'Foundation Builder · Mixed Workout A', duration:'20–30 min', phase:'Foundation', exercises:[E('Low Press Up',3,'12–16','3010','15–30 sec'),E('Bent-Hips Wide-Grip Inverted Row',3,'12–16','3010','15–30 sec'),E('Downfacing High Bent-Hip Dips',3,'12–16','3010','15–30 sec'),E('Strict Underhand-Grip Inverted Row',3,'12–16','3010','15–30 sec'),E('Squat',3,'12–16','3010','15–30 sec'),E('Mountain Climber',3,'12–16','Fast','15–30 sec'),E('Sit-Up',3,'12–16','Controlled','15–30 sec'),E('Tuck Jump',3,'12–16','Powerful','60–120 sec')]},
    'foundation-b': {title:'Foundation Builder · Mixed Workout B', duration:'20–30 min', phase:'Foundation', exercises:[E('Straight-Bar Wide-Grip Press Ups',3,'12–16','3010','15–30 sec'),E('Strict Inverted Row',3,'12–16','3010','15–30 sec'),E('Straight-Bar Close-Grip Press ups',3,'12–16','3010','15–30 sec'),E('Bent-Hips Underhand-Grip Inverted Row',3,'12–16','3010','15–30 sec'),E('Glute Bridge',3,'12–16','3010','15–30 sec'),E('Jump Squat',3,'12–16','Powerful','15–30 sec'),E('Alternate Running Plank',3,'12–16','Fast','15–30 sec'),E('Jumping Jack',3,'12–16','Controlled','60–120 sec')]},
    'foundation-c': {title:'Foundation Builder · Mixed Workout C', duration:'20–30 min', phase:'Foundation', exercises:[E('High Plyo Press Up',3,'12–16','3010','15–30 sec'),E('Bent-Hips Inverted Row',3,'12–16','3010','15–30 sec'),E('Forward Leaning Tricep Extension',3,'12–16','3010','15–30 sec'),E('Strict Neutral-Grip Inverted Row',3,'12–16','3010','15–30 sec'),E('Calf-Raise',3,'12–16','3010','15–30 sec'),E('Broad Jump',3,'12–16','Powerful','15–30 sec'),E('Plank',3,'30–60 sec','Hold','15–30 sec'),E('Burpee',3,'12–16','Fast','60–120 sec')]},
    'trainer-pull': {title:'Pull-Up Trainer', duration:'10 min', phase:'Foundation', exercises:[E('Partial Wide Grip Pull Up (bottom half)',1,'5–10','10X0','90 sec'),E('Jumping Wide Grip Pull Up w/ Slow Negative',1,'5–10','52X0','90 sec'),E('Jumping Chin up w/ Slow Negative',1,'5–10','52X0','90 sec'),E('Jumping Neutral Grip Pull Up w/ Slow Negative',1,'5–10','52X0','90 sec'),E('Scapula Retraction',1,'5–10','2111','90 sec'),E('Dead Hang',1,'Max time','Hold','90 sec')]},
    'trainer-dip': {title:'Dip Trainer', duration:'10 min', phase:'Foundation', exercises:[E('Partial Dips (top half)',1,'5–10','10X0','90 sec'),E('Jumping Dip w/ Slow Negative',1,'5–10','52X0','90 sec'),E('Dip Position Hold (at the top)',1,'Max time','Hold','90 sec'),E('Dip Position Hold (at the bottom)',1,'Max time','Hold','90 sec')]},
    'blast-lv1': {title:'Full Body Blast LV1', duration:'10 min', phase:'Foundation', exercises:[E('Low Press Up',3,'12–16','3010','15–30 sec'),E('Strict Inverted Row',3,'12–16','3010','15–30 sec'),E('Squat',3,'12–16','3010','15–30 sec'),E('Alternate Running Plank',3,'12–16','Fast','15–30 sec'),E('Burpee',3,'12–16','Fast','60–120 sec')]},
    'core-elements': {title:'Core Elements', duration:'5–10 min', phase:'Foundation', exercises:[E('Sit-Up',3,'12–16','Controlled','15–30 sec'),E('Reverse Crunch',3,'12–16','Controlled','15–30 sec'),E('Superman',3,'12–16','Controlled','15–30 sec'),E('Twisting Sit-Up',3,'12–16','Controlled','15–30 sec'),E('Side Plank',3,'Max time','Hold','60–120 sec')]},
    'ripped-a': {title:'Ripped and Ready · Mixed Workout A', duration:'30–45 min', phase:'Progression', exercises:[E('Neutral Grip Pull Up',3,'8–12','30X0','0 sec'),E('Decline Press Up',3,'8–12','30X0','0 sec'),E('Strict Underhand-Grip Inverted Row',3,'8–12','30X0','0 sec'),E('High Straight-Bar Dip',3,'8–12','30X0','0 sec'),E('Close Grip Chin up',3,'8–12','30X0','0 sec'),E('Calf-Raise',3,'8–12','30X0','120 sec'),E('Alternate Running Plank',3,'16–20','Fast','0 sec'),E('Jump Squat',3,'16–20','Powerful','0 sec'),E('Single-Leg Box Squat',3,'16–20','2010','0 sec'),E('Burpee',3,'16–20','Fast','0 sec'),E('Single-Leg Romanian Deadlift',3,'16–20','2010','120 sec')]},
    'ripped-b': {title:'Ripped and Ready · Mixed Workout B', duration:'30–45 min', phase:'Progression', exercises:[E('Decline Shoulder Press',3,'8–12','30X0','0 sec'),E('Chin Up',3,'8–12','30X0','0 sec'),E('Low Plyo Press Up',3,'8–12','30X0','0 sec'),E('Strict Neutral-Grip Inverted Row',3,'8–12','30X0','0 sec'),E('Raised Feet Straight Leg Rear Dips',3,'8–12','30X0','0 sec'),E('Squat Calf-Raise',3,'8–12','30X0','120 sec'),E('Dead Hang',3,'Max time','Hold','0 sec'),E('Mountain Climber',3,'16–20','Fast','0 sec'),E('Bulgarian Split Squat',3,'16–20','20X0','0 sec'),E('Jumping Jack',3,'16–20','Fast','0 sec'),E('Single-Leg Glute Bridge',3,'16–20','20X0','120 sec')]},
    'ripped-c': {title:'Ripped and Ready · Mixed Workout C', duration:'30–45 min', phase:'Progression', exercises:[E('L-Sit Wide-Grip Pull-Up',3,'8–12','30X0','0 sec'),E('Dips',3,'8–12','30X0','0 sec'),E('Strict Inverted Row',3,'8–12','30X0','0 sec'),E('Straight-Bar Wide-Grip Press Ups',3,'8–12','30X0','0 sec'),E('Strict Underhand Close-Grip Inverted Row',3,'8–12','30X0','0 sec'),E('Stiff-Leg Ankle Hop',3,'8–12','Powerful','120 sec'),E('Press Up Planche to L-Sit',3,'16–20','Fast','0 sec'),E('Single-Leg Jump Squat',3,'16–20','Powerful','0 sec'),E('Reverse Lunge',3,'16–20','20X0','0 sec'),E('Tuck Jump',3,'16–20','Powerful','0 sec'),E('Step-Up',3,'16–20','20X0','120 sec')]},
    'muscle-1': {title:'Muscle Builder · Full Body Hypertrophy 1', duration:'30–45 min', phase:'Progression', exercises:[E('Wide Grip Pull Up',4,'8–12','30X0','60 sec'),E('Decline Press Up',4,'8–12','30X0','60 sec'),E('Neutral Grip Pull Up',4,'8–12','30X0','45 sec'),E('Straight-Bar Wide-Grip Press Ups',4,'8–12','30X0','45 sec'),E('Strict Neutral-Grip Inverted Row',4,'8–12','30X0','60 sec'),E('Dips',4,'8–12','30X0','60 sec'),E('Strict Underhand Close-Grip Inverted Row',4,'8–12','30X0','45 sec'),E('Straight Leg Rear Dips',4,'8–12','30X0','45 sec'),E('Single-Leg Box Squat',4,'8–12','30X0','30 sec'),E('Single-Leg Romanian Deadlift',4,'8–12','30X0','30 sec'),E('Calf-Raise',3,'8–12','30X0','60 sec')]},
    'muscle-2': {title:'Muscle Builder · Full Body Hypertrophy 2', duration:'30–45 min', phase:'Progression', exercises:[E('Strict Wide-Grip Inverted Row',4,'8–12','30X0','60 sec'),E('High Straight-Bar Dip',4,'8–12','30X0','60 sec'),E('Chin Up',4,'8–12','30X0','60 sec'),E('Decline Shoulder Press',4,'8–12','30X0','60 sec'),E('Strict Inverted Row',4,'8–12','30X0','45 sec'),E('Downfacing High Dips',4,'8–12','30X0','45 sec'),E('Close Grip Chin up',4,'8–12','30X0','45 sec'),E('Forward Leaning Tricep Extension',4,'8–12','30X0','45 sec'),E('Bulgarian Split Squat',4,'8–12','30X0','30 sec'),E('Single-Leg Glute Bridge',4,'8–12','30X0','30 sec'),E('Squat Calf-Raise',3,'8–12','30X0','60 sec')]},
    'muscle-3': {title:'Muscle Builder · Full Body Hypertrophy 3', duration:'30–45 min', phase:'Progression', exercises:[E('Pull Up',4,'8–12','30X0','60 sec'),E('Low Plyo Press Up',4,'8–12','30X0','60 sec'),E('Strict Underhand-Grip Inverted Row',4,'8–12','30X0','60 sec'),E('Raised Feet Straight Leg Rear Underhand dips',4,'8–12','30X0','60 sec'),E('Bent-Hips Wide-Grip Inverted Row',4,'8–12','30X0','45 sec'),E('Downfacing Low Bent-Hip Dips',4,'8–12','30X0','45 sec'),E('Bent-Hips Underhand Close-Grip Inverted Row',4,'8–12','30X0','45 sec'),E('Straight-Bar Close-Grip Press ups',4,'8–12','30X0','45 sec'),E('Reverse Lunge',4,'8–12','30X0','30 sec'),E('Step-Up',4,'8–12','30X0','30 sec'),E('Stiff-Leg Ankle Hop',3,'8–12','30X0','60 sec')]},
    'blast-lv2': {title:'Full Body Blast LV2', duration:'10 min', phase:'Progression', exercises:[E('Downfacing High Dips',3,'12–16','3010','0 sec'),E('Wide Grip Pull Up',3,'12–16','3010','0 sec'),E('Bulgarian Split Squat',3,'12–16','3010','0 sec'),E('Hanging Leg Raise',3,'12–16','Controlled','0 sec'),E('Burpee',3,'12–16','Fast','60–120 sec')]},
    'core-conq-a': {title:'Core Conquerer A', duration:'5–15 min', phase:'Progression', exercises:[E('Hanging Leg Raise',2,'12','Controlled','0 sec'),E('Hanging Straight-Leg Scissors',2,'12','Controlled','0 sec'),E('Crunch',2,'16','Fast','0 sec'),E('Bicycle',2,'16','Fast','0 sec'),E('Plank',2,'Max time','Hold','60 sec')]},
    'core-conq-b': {title:'Core Conquerer B', duration:'5–15 min', phase:'Progression', exercises:[E('Hanging Leg Raise',2,'12','Controlled','30 sec'),E('Hanging Alternating Oblique Crunch',2,'12','Controlled','30 sec'),E('Suspended Knee Raise',2,'16','Controlled','30 sec'),E('Twisting Sit-Up',2,'20','Controlled','30 sec'),E('L-Sit Hold',2,'Max hold','Hold','30 sec')]},
    'core-conq-c': {title:'Core Conquerer C', duration:'5–15 min', phase:'Progression', exercises:[E('Suspended Leg Raise',4,'12','Controlled','30 sec'),E('Hanging Straight Leg Toes to Bar',3,'12','Controlled','30 sec'),E('Hanging Alternating Straight-Leg Oblique Crunch',3,'16','Controlled','0 sec'),E('Bicycle',3,'16','Fast','60 sec'),E('Sit-Up',2,'20','Controlled','0 sec'),E('Side Crunch',2,'20','Controlled','0 sec'),E('Crunch',2,'20','Fast','0 sec'),E('Side Plank',2,'Max time','Hold','60 sec')]},
    'extreme-a': {title:'Extreme Fit · Full Body Workout A', duration:'45–60 min', phase:'Ultimate', exercises:[E('L-Sit Wide-Grip Pull-Up',5,'45 sec','Controlled','30 sec active rest'),E('Jump Squat',5,'45 sec','Explosive','30 sec active rest'),E('Plank',5,'45 sec','Hold','30 sec active rest'),E('High Plyo Press Up',5,'45 sec','Explosive','30 sec active rest'),E('Suspended Leg Raise',5,'45 sec','Controlled','30 sec active rest'),E('Alternating Pistol Squat',5,'45 sec','Controlled','30 sec active rest'),E('Strict Underhand-Grip Inverted Row',5,'45 sec','10X0','30 sec active rest'),E('Mountain Climber',5,'45 sec','Fast','30 sec active rest'),E('Dips',5,'45 sec','10X0','30 sec active rest'),E('Shoulders-Elevated Hip Raise',5,'45 sec','10X1','30 sec active rest')]},
    'extreme-b': {title:'Extreme Fit · Full Body Workout B', duration:'45–60 min', phase:'Ultimate', exercises:[E('Neutral Grip Pull Up',5,'45 sec','10X0','30 sec active rest'),E('Burpee',5,'45 sec','Fast','30 sec active rest'),E('L-Sit Scissors',5,'45 sec','Controlled','30 sec active rest'),E('Raised Feet Straight Leg Rear Dips',5,'45 sec','10X0','30 sec active rest'),E('Hanging Alternating Oblique Crunch',5,'45 sec','Controlled','30 sec active rest'),E('Sumo Squat',5,'45 sec','10X0','30 sec active rest'),E('Strict Wide-Grip Inverted Row',5,'45 sec','Explosive','30 sec active rest'),E('Broad Jump',5,'45 sec','Explosive','30 sec active rest'),E('Downfacing High Dips',5,'45 sec','10X0','30 sec active rest'),E('Alternating Forward Lunge',5,'45 sec','20X0','30 sec active rest')]},
    'extreme-c': {title:'Extreme Fit · Full Body Workout C', duration:'45–60 min', phase:'Ultimate', exercises:[E('Close Grip Chin up',5,'45 sec','10X0','30 sec active rest'),E('Tuck Jump',5,'45 sec','Explosive','30 sec active rest'),E('Wide-Grip Dead Hang',5,'45 sec','Hold','30 sec active rest'),E('Decline Shoulder Press',5,'45 sec','10X0','30 sec active rest'),E('Crunch',5,'45 sec','Fast','30 sec active rest'),E('Alternating Reverse Lunge',5,'45 sec','20X0','30 sec active rest'),E('Strict Inverted Row',5,'45 sec','10X0','30 sec active rest'),E('Alternate Running Plank',5,'45 sec','Fast','30 sec active rest'),E('Straight-Bar Wide-Grip Press Ups',5,'45 sec','10X0','30 sec active rest'),E('Squat',5,'45 sec','10X0','30 sec active rest')]},
    'hardcore-push': {title:'Hardcore Strength · Push Workout', duration:'45–60 min', phase:'Ultimate', exercises:[E('High Straight-Bar Dip',4,'AMRAP','20X0','90 sec'),E('Decline Shoulder Press',4,'AMRAP','20X0','90 sec'),E('Partial Dips (top half)',4,'10','10X0','0 sec'),E('Partial Dips (bottom half)',4,'10','10X0','0 sec'),E('Dips',4,'AMRAP','20X0','90 sec'),E('Downfacing High Dips',4,'AMRAP','20X0','0 sec'),E('Decline Press Up',4,'AMRAP','20X0','90 sec'),E('Raised Feet Close-Grip Press ups',4,'AMRAP','20X0','0 sec'),E('Raised Feet Wide-Grip Press Ups',4,'AMRAP','10X0','90 sec'),E('Low Alternating High-Low Plyo Press Up',3,'20','Explosive','0 sec'),E('Forward Leaning Tricep Extension',3,'15','2010','0 sec'),E('Raised Feet Straight Leg Rear Dips',3,'AMRAP','20X0','90 sec')]},
    'hardcore-pull': {title:'Hardcore Strength · Pull Workout', duration:'45–60 min', phase:'Ultimate', exercises:[E('Wide Grip Pull Up Behind the Neck',4,'AMRAP','20X0','90 sec'),E('L-Sit Chin up',4,'AMRAP','20X0','90 sec'),E('Partial Wide Grip Pull Up (bottom half)',4,'5','10X0','0 sec'),E('Partial Wide Grip Pull Up (top half)',4,'5','10X0','0 sec'),E('Wide Grip Pull Up',4,'AMRAP','20X0','90 sec'),E('Close Grip Chin up',4,'AMRAP','20X0','0 sec'),E('Strict Neutral-Grip Inverted Row',4,'AMRAP','20X0','90 sec'),E('Neutral Grip Scapula Retraction',4,'5','20X0','0 sec'),E('Neutral Grip Pull Up',4,'AMRAP','10X0','0 sec'),E('Strict Underhand-Grip Inverted Row',4,'AMRAP','20X0','90 sec'),E('Strict Underhand Close-Grip Inverted Row',3,'10','20X0','0 sec'),E('Strict Inverted Row',3,'10','20X0','0 sec'),E('Bent-Hips Wide-Grip Inverted Row',3,'AMRAP','20X0','90 sec')]},
    'hardcore-legs': {title:'Hardcore Strength · Leg Workout', duration:'45–60 min', phase:'Ultimate', exercises:[E('Pistol Squat',4,'AMRAP','2011','90 sec'),E('Bulgarian Split Squat',4,'AMRAP','2010','90 sec'),E('Single-Leg Shoulders Elevated Hip Raise',4,'AMRAP','2011','90 sec'),E('Single-Leg Box Squat',4,'AMRAP','31X1','0 sec'),E('Single-Leg Romanian Deadlift',4,'AMRAP','3010','60 sec'),E('Squat',4,'30','10X0','0 sec'),E('Jump Squat',4,'AMRAP','Explosive','60 sec'),E('Side Lying Clam',3,'15','2011','0 sec'),E('Donkey Kick',3,'10','2011','0 sec'),E('Shoulders-Elevated Hip Raise',3,'AMRAP','20X3','60 sec')]},
    'blast-lv3': {title:'Full Body Blast LV3', duration:'10 min', phase:'Ultimate', exercises:[E('High Straight-Bar Dip',3,'12–16','3010','0 sec'),E('L-Sit Chin up',3,'12–16','3010','0 sec'),E('Alternating Pistol Squat',3,'12–16','3010','0 sec'),E('Suspended Windshield Wipers 360',3,'12–16','Controlled','0 sec'),E('Tuck Jump',3,'12–16','Fast','60–120 sec')]},
    'killer-a': {title:'Killer Core A', duration:'10–30 min', phase:'Ultimate', exercises:[E('Hanging Straight Leg Toes to Bar',4,'12','Controlled','0 sec'),E('Hanging Windshield Wipers 180',4,'12','Controlled','0 sec'),E('Sit-Up',4,'16','Controlled','0 sec'),E('Twisting Sit-Up',4,'16','Controlled','0 sec'),E('Plank',4,'Max time','Hold','60 sec')]},
    'killer-b': {title:'Killer Core B', duration:'10–30 min', phase:'Ultimate', exercises:[E('Hanging Straight Leg Toes to Bar',4,'12','Controlled','30 sec'),E('Hanging Alternating Straight-Leg Oblique Crunch',4,'12','Controlled','30 sec'),E('Suspended Leg Raise',4,'16','Controlled','30 sec'),E('Hanging Knee Raise',4,'16','Controlled','30 sec'),E('Side Plank',4,'Max time','Hold','30 sec')]},
    'killer-c': {title:'Killer Core C', duration:'10–30 min', phase:'Ultimate', exercises:[E('Hanging Straight Leg Toes to Bar',4,'12','Controlled','30 sec'),E('Suspended Windshield Wipers 360',4,'12','Controlled','30 sec'),E('Suspended Alternating Straight-Leg Oblique Crunch',4,'12','Controlled','30 sec'),E('Hanging Straight-Leg Scissors',3,'16','Controlled','0 sec'),E('Hanging Bent Knee Toes to Bar',3,'16','Controlled','45 sec'),E('Hanging Alternating Oblique Crunch',3,'12','Controlled','0 sec'),E('Crunch',3,'16','Fast','0 sec'),E('Bicycle',3,'20','Fast','60 sec'),E('Suspended Knee Raise',2,'20','Controlled','0 sec'),E('Side Crunch',2,'20','Controlled','0 sec'),E('Sit-Up',2,'20','Controlled','0 sec'),E('Alternate Running Plank',2,'20','Fast','90 sec')]}
  };
  const rotation = {
    fit:{Foundation:['foundation-a','foundation-b','foundation-c'],Progression:['ripped-a','ripped-b','ripped-c'],Ultimate:['extreme-a','extreme-b','extreme-c']},
    built:{Foundation:['foundation-a','foundation-b','foundation-c'],Progression:['muscle-1','muscle-2','muscle-3'],Ultimate:['hardcore-push','hardcore-pull','hardcore-legs']}
  };
  return {weekPlan, exercises, workouts, rotation, imageOverrides: IMAGE_OVERRIDES};
})();

function slug(s){return String(s).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const state = JSON.parse(localStorage.getItem('ctc-state') || '{}');
const S = Object.assign({pathway:'fit', week:1, completed:{}, completedWorkouts:[], tests:[], measures:[], notes:{}, cardioLogs:[], onboarded:false}, state);
function save(){localStorage.setItem('ctc-state', JSON.stringify(S));}

function pathwayName(){return S.pathway === 'built' ? 'Strong and Built' : 'Fit and Lean'}
function currentWeek(){return DB.weekPlan(S.pathway)[S.week-1]}
function workoutIdsForWeek(){const w=currentWeek(); return DB.rotation[S.pathway][w.phase] || DB.rotation.fit.Foundation}
function todayWorkoutId(){const ids=workoutIdsForWeek(); const day=(new Date().getDay()+6)%7; return ids[day%ids.length]}
function exerciseMeta(name){const id=slug(name); return DB.exercises.find(e=>e.id===id) || {name, id, muscles:'—', img:(DB.imageOverrides && DB.imageOverrides[id]) || `assets/images/${id}.webp`, tip:'Controlla il movimento e adatta l’esercizio al tuo livello.', mistakes:['Movimento frettoloso','Perdere assetto del corpo','Continuare in caso di dolore']}}
function restSeconds(rest){ if(!rest) return 0; if(rest.includes('0 sec')) return 0; const nums=[...rest.matchAll(/\d+/g)].map(m=>+m[0]); if(!nums.length) return 30; if(rest.includes('120')) return 90; if(nums.length>1) return nums[Math.floor(nums.length/2)]; return nums[0]; }

function init(){
  if(!S.onboarded){$('#onboarding').classList.remove('hidden'); $$('.screen').forEach(s=>s.classList.remove('active')); $('.bottomnav').style.display='none';}
  $$('.pathwayChoice').forEach(b=>b.onclick=()=>{$$('.pathwayChoice').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');S.pathway=b.dataset.pathway;save();});
  $('#startApp').onclick=()=>{S.onboarded=true;save();$('#onboarding').classList.add('hidden');$('.bottomnav').style.display='flex';showTab('dashboard');renderAll();};
  $$('.navbtn').forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
  $('#settingsBtn').onclick=()=>showTab('settings');
  $('#pathwayToggle').onclick=()=>togglePathway();
  $('#saveSettings').onclick=(e)=>{e.preventDefault(); S.pathway=$('#pathwaySelect').value; S.week=Math.max(1,Math.min(24,+$('#weekInput').value||1)); save(); $('#settingsDialog').close(); renderAll();};
  $('#resetProgress').onclick=(e)=>{e.preventDefault(); resetAllData();};
  renderAll();
}
function showTab(tab){ $$('.screen').forEach(s=>s.classList.toggle('active',s.id===tab)); $$('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab)); renderAll(); }
function setPathway(pathway){
  S.pathway = pathway === 'built' ? 'built' : 'fit';
  save();
  updatePathwayUI();
  renderAll();
}
function togglePathway(){
  setPathway(S.pathway === 'fit' ? 'built' : 'fit');
}
function updatePathwayUI(){
  const btn = $('#pathwayToggle');
  if(btn){
    btn.innerHTML = S.pathway === 'built'
      ? '<strong>Strong & Built</strong><small>tocca per Fit & Lean</small>'
      : '<strong>Fit & Lean</strong><small>tocca per Strong & Built</small>';
  }
  const select = $('#pathwaySelect');
  if(select) select.value = S.pathway;
}
function renderAll(){ updatePathwayUI(); if(!S.onboarded) return; renderDashboard(); renderProgram(); renderPlanner(); renderGuided(); renderLibrary(); renderCardio(); renderTests(); renderProgress(); renderStretching(); renderHistory(); renderSettingsScreen(); }
function renderDashboard(){const w=currentWeek(); const wid=todayWorkoutId(); const wo=DB.workouts[wid]; $('#dashboard').innerHTML=`
  <div class="card"><span class="pill">Settimana ${S.week} · ${w.phase}</span><h2>${pathwayName()}</h2><p class="sub">Percorso predefinito: Fit and Lean. Puoi cambiare percorso e settimana dalle impostazioni.</p><div class="grid"><div class="stat"><small>Main</small><b>${w.main.split(' ')[0]}</b></div><div class="stat"><small>Core</small><b>${w.core.includes('x2')?'2x':'1x'}</b></div><div class="stat"><small>Cardio</small><b>${w.steady==='0'?'—':w.steady.split(' ')[2]||'SS'}</b></div><div class="stat"><small>HIIT</small><b>${w.hiit==='0'?'—':w.hiit.split(' ')[1]}</b></div></div></div>
  <div class="card"><h3>Allenamento consigliato oggi</h3><p class="sub">${wo.title} · ${wo.duration}</p><button class="primary full" onclick="showTab('guided')">Avvia procedura guidata</button><button class="secondary full" onclick="showTab('planner')" style="margin-top:8px">Apri planner settimana</button></div>
  <div class="card"><h3>Checklist settimana</h3>${check('Main workout',w.main)}${check('Pull-Up & Dip trainer',w.trainer)}${check('Core',w.core)}${check('Blast',w.blast)}${check('Steady State',w.steady)}${check('HIIT',w.hiit)}<button class="secondary full" onclick="showTab('program')">Vedi programma completo</button></div>
  <div class="card"><h3>Cardio suggerito</h3><p><strong>${w.steady}</strong> · <strong>${w.hiit}</strong></p><p class="sub">Alternative: camminata veloce, corsa leggera, cyclette, vogatore, corda, scale, nuoto o sport.</p></div>`;}
function check(label,val){return `<div class="checkline"><input type="checkbox"><span><b>${label}</b><br><small>${val}</small></span></div>`}
function renderProgram(){const weeks=DB.weekPlan(S.pathway); $('#program').innerHTML=`<div class="card"><h2>Programma 12 settimane</h2><p class="sub">Percorso: <strong>${pathwayName()}</strong></p><div class="week-grid">${weeks.map(w=>`<button class="weekbtn ${w.week===S.week?'current':''}" onclick="S.week=${w.week};save();renderAll()">W${w.week}<br><small>${w.phase[0]}</small></button>`).join('')}</div></div><div class="card"><h3>Settimana ${S.week}</h3>${weekDetails(currentWeek())}</div><div class="card"><h3>Workout della fase</h3>${workoutIdsForWeek().map(id=>workoutMini(DB.workouts[id],id)).join('')}</div>`;}
function weekDetails(w){return `<div class="exercise-list">${['main','trainer','core','blast','steady','hiit'].map(k=>`<div class="exercise"><h4>${{main:'Main workout',trainer:'Pull-Up & Dip trainer',core:'Core',blast:'Blast',steady:'Steady State',hiit:'HIIT'}[k]}</h4><p class="sub">${w[k]}</p></div>`).join('')}</div>`}
function workoutMini(wo,id){return `<div class="exercise"><h4>${wo.title}</h4><p class="sub">${wo.duration} · ${wo.exercises.length} esercizi</p><button onclick="startGuided('${id}')">Apri guidato</button></div>`}
let guided = {workoutId:null, exerciseIndex:0, set:1, timer:null, seconds:0};
function startGuided(id){guided={workoutId:id,exerciseIndex:0,set:1,timer:null,seconds:0};showTab('guided');renderGuided();}
function renderGuided(){const id=guided.workoutId || todayWorkoutId(); guided.workoutId=id; const wo=DB.workouts[id]; const item=wo.exercises[guided.exerciseIndex] || wo.exercises[0]; const meta=exerciseMeta(item.name); const pct=(guided.exerciseIndex/wo.exercises.length)*100; $('#guided').innerHTML=`<div class="card guide-panel"><span class="pill">${wo.title}</span><div class="progressbar"><i style="width:${pct}%"></i></div><h2>${item.name}</h2><p class="sub">Esercizio ${guided.exerciseIndex+1} di ${wo.exercises.length}</p><img class="exercise-img" src="${meta.img}" onerror="this.src='assets/images/generic-exercise.webp'" alt="${item.name}"><div class="grid"><div class="stat"><small>Serie</small><b>${guided.set}/${item.sets}</b></div><div class="stat"><small>Reps/tempo</small><b>${item.reps}</b></div><div class="stat"><small>Tempo</small><b>${item.tempo}</b></div><div class="stat"><small>Recupero</small><b>${item.rest}</b></div></div><h3>Consiglio</h3><p>${meta.tip}</p><details><summary><strong>Errori da evitare</strong></summary><ul>${meta.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></details><label>Annotazioni personali<textarea id="noteBox" placeholder="Peso, reps reali, fatica, fastidi..."></textarea></label><div class="timer" id="timerBox">${format(guided.seconds)}</div><div class="row gap"><button class="secondary full" onclick="startSetTimer()">Timer esercizio</button><button class="secondary full" onclick="startRest()">Recupero</button></div><div class="row gap" style="margin-top:10px"><button class="secondary full" onclick="stopTimer()">Pausa</button><button class="primary full" onclick="completeSet()">Serie completata</button></div><div class="row gap" style="margin-top:10px"><button onclick="prevExercise()">Indietro</button><button onclick="nextExercise()">Prossimo esercizio</button></div></div>`;}
function format(s){const m=Math.floor(s/60), r=s%60; return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`}
function startRest(){const wo=DB.workouts[guided.workoutId]; const item=wo.exercises[guided.exerciseIndex]; guided.seconds=restSeconds(item.rest); clearInterval(guided.timer); guided.timer=setInterval(()=>{guided.seconds=Math.max(0,guided.seconds-1); const t=$('#timerBox'); if(t)t.textContent=format(guided.seconds); if(guided.seconds===0)clearInterval(guided.timer);},1000); renderGuided();}
function startSetTimer(){const wo=DB.workouts[guided.workoutId]; const item=wo.exercises[guided.exerciseIndex]; guided.seconds=workSeconds(item.reps); clearInterval(guided.timer); guided.timer=setInterval(()=>{guided.seconds=Math.max(0,guided.seconds-1); const t=$('#timerBox'); if(t)t.textContent=format(guided.seconds); if(guided.seconds===0)clearInterval(guided.timer);},1000); renderGuided();}
function stopTimer(){clearInterval(guided.timer);}
function workSeconds(reps){const txt=String(reps).toLowerCase(); if(txt.includes('45')) return 45; if(txt.includes('30')) return 30; if(txt.includes('max')||txt.includes('amrap')) return 60; return 40;}
function completeSet(){const wo=DB.workouts[guided.workoutId]; const item=wo.exercises[guided.exerciseIndex]; const key=`w${S.week}-${guided.workoutId}-${guided.exerciseIndex}-${guided.set}`; S.completed[key]=true; const note=$('#noteBox')?.value; if(note)S.notes[key]=note; save(); if(guided.set < Number(item.sets)){guided.set++; startRest();} else {nextExercise();}}
function nextExercise(){const wo=DB.workouts[guided.workoutId]; clearInterval(guided.timer); guided.seconds=0; if(guided.exerciseIndex < wo.exercises.length-1){guided.exerciseIndex++; guided.set=1;} else {const done={date:new Date().toLocaleDateString('it-IT'), week:S.week, pathway:S.pathway, workout:wo.title}; S.completedWorkouts.unshift(done); save(); alert('Allenamento completato e salvato nello storico. Ottimo lavoro!');} renderGuided();}
function prevExercise(){clearInterval(guided.timer); guided.seconds=0; if(guided.exerciseIndex>0)guided.exerciseIndex--; guided.set=1; renderGuided();}
function renderLibrary(){const q=($('#search')?.value||'').toLowerCase(); const list=DB.exercises.filter(e=>!q || e.name.toLowerCase().includes(q)||e.muscles.toLowerCase().includes(q)); $('#library').innerHTML=`<div class="card"><h2>Libreria esercizi</h2><input id="search" class="search" placeholder="Cerca esercizio o muscolo" value="${q}" oninput="renderLibrary()"><div class="library-grid">${list.map(e=>`<div class="exercise"><img class="exercise-img" src="${e.img}" onerror="this.src='assets/images/generic-exercise.webp'" alt="${e.name}"><h4>${e.name}</h4><p class="sub">${e.muscles}</p><details><summary>Dettagli</summary><p>${e.tip}</p><ul>${e.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></details></div>`).join('')}</div></div>`;}

function renderCardio(){ const w=currentWeek(); $('#cardio').innerHTML=`
  <div class="card"><h2>Cardio</h2><p class="sub">Mostra il cardio suggerito dalla settimana corrente e alcune alternative pratiche.</p><div class="grid"><div class="stat"><small>Steady State</small><b>${w.steady}</b></div><div class="stat"><small>HIIT</small><b>${w.hiit}</b></div></div></div>
  <div class="card"><h3>Alternative Steady State</h3><div class="exercise-list">${['Camminata veloce','Corsa leggera','Cyclette','Vogatore','Scale','Nuoto','Sport leggero'].map(x=>`<div class="exercise"><h4>${x}</h4><p class="sub">Intensità sostenibile, respirazione accelerata ma controllabile.</p></div>`).join('')}</div></div>
  <div class="card"><h3>Alternative HIIT</h3><p class="sub">Usale solo se recuperi bene e non hai fastidi articolari.</p><div class="exercise-list">${['Sprint 30/90','Cyclette intervalli','Corda intervalli','Burpee interval','Scale interval'].map(x=>`<div class="exercise"><h4>${x}</h4><p class="sub">Fase intensa + fase facile. Mantieni tecnica pulita.</p></div>`).join('')}</div></div>
  <div class="card"><h3>Registra cardio</h3><label>Tipo<select id="cardioType"><option>Steady State</option><option>HIIT</option><option>Camminata</option><option>Corsa</option><option>Cyclette</option><option>Altro</option></select></label><label>Minuti<input id="cardioMin" type="number" min="0"></label><label>Note<textarea id="cardioNote" placeholder="RPE, distanza, passi, sensazioni..."></textarea></label><button class="primary full" onclick="saveCardio()">Salva cardio</button></div>
  <div class="card"><h3>Storico cardio</h3>${S.cardioLogs.slice(0,6).map(c=>`<div class="exercise"><h4>${c.date} · ${c.type}</h4><p class="sub">${c.min} min · ${c.note||''}</p></div>`).join('')||'<p class="sub">Nessun cardio registrato.</p>'}</div>`; }
function saveCardio(){S.cardioLogs.unshift({date:new Date().toLocaleDateString('it-IT'),type:$('#cardioType').value,min:$('#cardioMin').value,note:$('#cardioNote').value}); save(); renderCardio();}
function renderTests(){ const tests=['Wide Pull Ups','Dips','Strict Inverted Row','Press Up','Pistol Squat / Bulgarian Split Squat','Body Squat 1 min','Plank','Dead Hang','5 km run','Bodyweight']; $('#tests').innerHTML=`<div class="card"><h2>Fitness Test</h2><p class="sub">Da fare all’inizio, alla settimana 4, 8 e 12. Registra max reps, max time o tempo sui 5 km.</p>${tests.map(t=>`<label>${t}<input data-test="${t}" placeholder="reps, tempo o note"></label>`).join('')}<button class="primary full" onclick="saveTests()">Salva test</button></div><div class="card"><h3>Storico test</h3>${S.tests.slice(0,6).map(t=>`<div class="exercise"><h4>${t.date}</h4><p class="sub">${Object.entries(t.values).filter(([k,v])=>v).map(([k,v])=>`${k}: ${v}`).join(' · ')||'—'}</p></div>`).join('')||'<p class="sub">Nessun test salvato.</p>'}</div>`;}
function renderProgress(){ $('#progress').innerHTML=`<div class="card"><h2>Progressi</h2><p class="sub">Salva misure e test. I dati restano nel browser di questo dispositivo.</p><label>Peso corporeo<input id="bw" type="number" step="0.1" placeholder="kg"></label><label>Girovita<input id="waist" type="number" step="0.1" placeholder="cm"></label><label>Petto<input id="chest" type="number" step="0.1" placeholder="cm"></label><label>Braccio<input id="arm" type="number" step="0.1" placeholder="cm"></label><label>Coscia<input id="thigh" type="number" step="0.1" placeholder="cm"></label><label>Passi giornalieri<input id="steps" type="number" placeholder="passi"></label><label>Energia 1–10<input id="energy" type="number" min="1" max="10"></label><label>Fatica 1–10<input id="fatigue" type="number" min="1" max="10"></label><label>Note<textarea id="measureNotes" placeholder="foto, dolori, sonno, sensazioni..."></textarea></label><button class="primary full" onclick="saveMeasure()">Salva rilevazione</button></div><div class="card"><h3>Fitness test</h3><p class="sub">First week, week 4, week 8, week 12.</p>${['Wide Pull Ups','Dips','Strict Inverted Row','Press Up','Split Squat','Body Squat 1 min','Plank','Dead Hang','5 km run'].map(t=>`<label>${t}<input data-test="${t}" placeholder="reps, tempo o note"></label>`).join('')}<button class="secondary full" onclick="saveTests()">Salva test</button></div><div class="card"><h3>Storico</h3>${historyHtml()}</div>`;}
function saveMeasure(){const fields=['bw','waist','chest','arm','thigh','steps','energy','fatigue','measureNotes']; const entry={date:new Date().toLocaleDateString('it-IT')}; fields.forEach(f=>entry[f]=$('#'+f).value); S.measures.unshift(entry); save(); renderProgress();}
function saveTests(){const entry={date:new Date().toLocaleDateString('it-IT'), values:{}}; $$('[data-test]').forEach(i=>entry.values[i.dataset.test]=i.value); S.tests.unshift(entry); save(); renderProgress();}
function historyHtml(){const measures=S.measures.slice(0,5).map(m=>`<div class="exercise"><h4>${m.date}</h4><p class="sub">Peso ${m.bw||'-'} kg · Vita ${m.waist||'-'} cm · Energia ${m.energy||'-'}/10</p></div>`).join('')||'<p class="sub">Nessun dato ancora.</p>'; const tests=S.tests.slice(0,3).map(t=>`<div class="exercise"><h4>Test ${t.date}</h4><p class="sub">${Object.entries(t.values).filter(([k,v])=>v).map(([k,v])=>`${k}: ${v}`).join(' · ')||'—'}</p></div>`).join(''); const wos=(S.completedWorkouts||[]).slice(0,5).map(w=>`<div class="exercise"><h4>${w.date} · ${w.workout}</h4><p class="sub">Settimana ${w.week} · ${w.pathway==='built'?'Strong and Built':'Fit and Lean'}</p></div>`).join(''); return wos+measures+tests;}


function renderStretching(){
  const mobility = [
    ['Doorway Chest Stretch','Petto e spalle','30–45 sec per lato','Mantieni scapole basse, non forzare la spalla.'],
    ['Lat Stretch','Dorsali','30–45 sec per lato','Spingi il bacino indietro e respira ampio.'],
    ['Hip Flexor Stretch','Flessori anca','45 sec per lato','Gluteo contratto per non inarcare la schiena.'],
    ['Hamstring Stretch','Femorali','45 sec per lato','Schiena lunga, ginocchio leggermente morbido.'],
    ['Child Pose Breathing','Schiena e respirazione','60 sec','Respira lento e rilassa collo e trapezi.'],
    ['Wrist Prep','Polsi','60 sec','Utile prima di press up, plank e dips.']
  ];
  $('#stretching').innerHTML=`<div class="card"><h2>Stretching</h2><p class="sub">Routine breve post-allenamento o nei giorni di recupero. Rimani sempre in zona confortevole, senza dolore.</p></div><div class="card"><h3>Routine consigliata 8–12 minuti</h3><div class="exercise-list">${mobility.map(x=>`<div class="exercise"><h4>${x[0]}</h4><p class="sub"><strong>${x[1]}</strong> · ${x[2]}</p><p>${x[3]}</p></div>`).join('')}</div></div>`;
}

function renderHistory(){
  const workouts=(S.completedWorkouts||[]).map(w=>`<div class="exercise"><h4>${w.date} · ${w.workout}</h4><p class="sub">Settimana ${w.week} · ${w.pathway==='built'?'Strong and Built':'Fit and Lean'}</p></div>`).join('')||'<p class="sub">Nessun allenamento completato.</p>';
  const cardio=(S.cardioLogs||[]).map(c=>`<div class="exercise"><h4>${c.date} · ${c.type}</h4><p class="sub">${c.min||'-'} min · ${c.note||''}</p></div>`).join('')||'<p class="sub">Nessun cardio registrato.</p>';
  const measures=(S.measures||[]).map(m=>`<div class="exercise"><h4>${m.date}</h4><p class="sub">Peso ${m.bw||'-'} kg · Vita ${m.waist||'-'} cm · Energia ${m.energy||'-'}/10 · Fatica ${m.fatigue||'-'}/10</p></div>`).join('')||'<p class="sub">Nessuna misura registrata.</p>';
  $('#history').innerHTML=`<div class="card"><h2>Cronologia</h2><p class="sub">Riepilogo dei dati salvati localmente su questo dispositivo.</p></div><div class="card"><h3>Workout completati</h3>${workouts}</div><div class="card"><h3>Cardio</h3>${cardio}</div><div class="card"><h3>Misure</h3>${measures}</div>`;
}

function renderSettingsScreen(){
  $('#settings').innerHTML=`<div class="card"><h2>Impostazioni</h2><p class="sub">Percorso predefinito: <strong>Fit and Lean</strong>. Puoi cambiare percorso o resettare tutto quando vuoi.</p><label>Percorso<select id="settingsPathwaySelect"><option value="fit" ${S.pathway==='fit'?'selected':''}>Fit and Lean</option><option value="built" ${S.pathway==='built'?'selected':''}>Strong and Built</option></select></label><label>Settimana corrente<input id="settingsWeekInput" type="number" min="1" max="12" value="${S.week}"></label><div class="row gap"><button class="primary full" onclick="saveSettingsScreen()">Salva impostazioni</button><button class="danger full" onclick="resetAllData()">Reset app</button></div></div><div class="card"><h3>Versione</h3><p class="sub">Coach Tascabile Calisthenics v2.4.6 · smartphone · menu adattivo · switch Fit & Lean / Strong & Built · image-style fix.</p></div>`;
}
function saveSettingsScreen(){S.pathway=$('#settingsPathwaySelect').value; S.week=Math.max(1,Math.min(totalWeeks ? totalWeeks() : 24,+$('#settingsWeekInput').value||1)); save(); renderAll(); showTab('dashboard');}
function resetAllData(){ if(confirm('Vuoi azzerare dati, percorso, cronologia e impostazioni?')){localStorage.removeItem('ctc-state'); location.reload();} }

if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});} 
init();


/* =========================================================
   v2.3 Adaptive Coach Update
   Adds weekly check-in, adaptive progression, foundation extension,
   exercise scaling, adaptive recovery, cardio/NEAT and phase tests.
   ========================================================= */

const ADAPTIVE_RULES = {
  green:{label:'VERDE', className:'green', title:'Puoi continuare normalmente'},
  yellow:{label:'GIALLO', className:'yellow', title:'Continua, ma scala alcuni esercizi o aumenta i recuperi'},
  red:{label:'ROSSO', className:'red', title:'Non avanzare: ripeti o estendi Foundation'}
};

const ADAPTIVE_SCALING = {
  'pull-up':['Band-assisted pull-up','Partial pull-up','Inverted Row'],
  'wide-grip-pull-up':['Partial Wide Grip Pull Up (bottom half)','Band-assisted pull-up','Inverted Row'],
  'chin-up':['Band-assisted chin-up','Jumping Chin up w/ Slow Negative'],
  'close-grip-chin-up':['Band-assisted chin-up','Jumping Chin up w/ Slow Negative'],
  'dips':['Partial Dips (top half)','Partial Dips (bottom half)','Feet-assisted dips'],
  'high-straight-bar-dip':['Partial Dips (top half)','Feet-assisted dips'],
  'inverted-row':['Bent-Hips Inverted Row','Barra più alta / ginocchia piegate'],
  'strict-inverted-row':['Bent-Hips Inverted Row','Strict Inverted Row con angolo più facile'],
  'strict-wide-grip-inverted-row':['Bent-Hips Wide-Grip Inverted Row'],
  'strict-underhand-grip-inverted-row':['Bent-Hips Underhand-Grip Inverted Row'],
  'low-press-up':['Straight-Bar Press Ups con sbarra più alta','Push-up ginocchia a terra'],
  'decline-press-up':['Low Press Up','Straight-Bar Press Ups'],
  'straight-bar-press-ups':['Sbarra più alta','Push-up inclinato'],
  'hanging-leg-raise':['Hanging Knee Raise'],
  'suspended-leg-raise':['Suspended Knee Raise'],
  'hanging-straight-leg-toes-to-bar':['Hanging Bent Knee Toes to Bar'],
  'hanging-bent-knee-toes-to-bar':['Hanging Knee Raise'],
  'l-sit-hold':['Knees-tucked hold','Tenuta più breve 5–15 sec'],
  'l-sit-scissors':['L-Sit Hold più breve','Knees-tucked hold'],
  'plank':['Plank più breve','Plank con ginocchia a terra'],
  'side-plank':['Side plank ginocchio a terra','Tenuta più breve'],
  'bulgarian-split-squat':['Split squat normale','Affondo assistito'],
  'pistol-squat':['Box squat una gamba','Bulgarian Split Squat assistito'],
  'alternating-pistol-squat':['Box squat una gamba','Bulgarian Split Squat assistito']
};

function ensureAdaptiveState(){
  S.foundationExtensionWeeks = Number(S.foundationExtensionWeeks||0);
  S.phaseExtensions = S.phaseExtensions || {};
  S.weeklyCheckins = S.weeklyCheckins || [];
  S.exerciseProgress = S.exerciseProgress || [];
  S.dailyActivity = S.dailyActivity || [];
  S.weeklyPlanner = S.weeklyPlanner || {};
  S.adaptiveAdvice = S.adaptiveAdvice || null;
  S.simplifiedMode = !!S.simplifiedMode;
  S.totalProgramWeeks = totalWeeks();
  if(!S.week || S.week<1) S.week=1;
  if(S.week>totalWeeks()) S.week=totalWeeks();
}

function totalWeeks(){ return 12 + Number(S.foundationExtensionWeeks||0); }

function baseWeekFor(displayWeek){
  const ext = Number(S.foundationExtensionWeeks||0);
  if(displayWeek <= 4 + ext){
    return ((displayWeek-1) % 4) + 1;
  }
  return Math.min(12, displayWeek - ext);
}

function currentWeek(){
  ensureAdaptiveState();
  const base = DB.weekPlan(S.pathway)[baseWeekFor(S.week)-1];
  const copy = Object.assign({}, base);
  copy.displayWeek = S.week;
  copy.week = S.week;
  copy.baseWeek = base.week;
  copy.extended = S.week !== base.week;
  copy.totalWeeks = totalWeeks();
  if(S.week <= 4 + Number(S.foundationExtensionWeeks||0)) copy.phase = 'Foundation';
  return copy;
}

function workoutIdsForWeek(){
  const w=currentWeek();
  return DB.rotation[S.pathway][w.phase] || DB.rotation.fit.Foundation;
}

function isCheckpointWeek(week=S.week){
  const ext=Number(S.foundationExtensionWeeks||0);
  return week===4+ext || week===8+ext || week===12+ext || week===totalWeeks();
}

function checkpointLabel(week=S.week){
  const ext=Number(S.foundationExtensionWeeks||0);
  if(week===4+ext) return 'Checkpoint Foundation → Progression';
  if(week===8+ext) return 'Checkpoint Progression → Ultimate';
  if(week===12+ext || week===totalWeeks()) return 'Checkpoint finale';
  return 'Check-in settimanale';
}

function badgeHtml(result){
  if(!result) return '<span class="badge gray">Nessun check-in</span>';
  const r=ADAPTIVE_RULES[result.status]||ADAPTIVE_RULES.yellow;
  return `<span class="badge ${r.className}">${r.label} · ${r.title}</span>`;
}

function lastCheckin(){
  ensureAdaptiveState();
  return [...S.weeklyCheckins].sort((a,b)=>(b.savedAt||'').localeCompare(a.savedAt||''))[0] || null;
}

function checkinForWeek(week=S.week){
  ensureAdaptiveState();
  return S.weeklyCheckins.find(c=>Number(c.weekNumber)===Number(week) && c.pathway===S.pathway) || null;
}

function evaluateWeeklyCheckin(c){
  const pain = (c.painAreas||[]).length>0;
  const reasons=[];
  let status='green';
  if((+c.completedMainWorkouts)<2){status='red'; reasons.push('meno di 2 main workout completati');}
  if((+c.averageRepsRatio)<40){status='red'; reasons.push('meno del 40% delle reps previste');}
  if((+c.techniqueScore)<5){status='red'; reasons.push('tecnica non abbastanza stabile');}
  if(pain){status='red'; reasons.push('dolore articolare segnalato');}
  if((+c.fatigueScore)>=9){status='red'; reasons.push('fatica molto alta');}
  if(status!=='red'){
    if((+c.averageRepsRatio)<70){status='yellow'; reasons.push('reps tra 40% e 70% del target');}
    if((+c.techniqueScore)<7){status='yellow'; reasons.push('tecnica non sempre pulita');}
    if((+c.fatigueScore)>=8){status='yellow'; reasons.push('affaticamento alto ma gestibile');}
    if((+c.recoveryScore)<5){status='yellow'; reasons.push('recupero basso');}
  }
  if(status==='green') reasons.push('criteri minimi rispettati: volume, tecnica, reps e recupero sono adeguati');
  let action = status==='green' ? 'Continua normalmente con la settimana successiva.' :
               status==='yellow' ? 'Continua ma usa scaling, aumenta recuperi e valuta modalità semplificata.' :
               'Non avanzare: ripeti la settimana o estendi Foundation se sei ancora nella fase base.';
  if(status!=='green' && c.completedCardio==='no') action += ' Mantieni il cardio leggero e riduci HIIT.';
  return {status, action, reasons};
}

function renderAll(){
  if(!S.onboarded) return;
  ensureAdaptiveState();
  renderDashboard(); renderProgram(); renderPlanner(); renderGuided(); renderLibrary(); renderCardio();
  renderCheckin(); renderAdvice(); renderGuide(); renderTests(); renderProgress(); renderStretching(); renderHistory(); renderSettingsScreen();
}

function renderDashboard(){
  ensureAdaptiveState();
  const w=currentWeek(); const wid=todayWorkoutId(); const wo=DB.workouts[wid]; const lc=lastCheckin();
  $('#dashboard').innerHTML=`
  <div class="card">
    <span class="pill">Settimana ${S.week}/${totalWeeks()} · ${w.phase}${w.extended?' · Foundation estesa':''}</span>
    <h2>${pathwayName()}</h2>
    <p class="sub">Ora il programma è adattivo: ogni check-in decide se avanzare, scalare, ripetere o ridurre cardio/HIIT. Puoi cambiare percorso subito qui sotto.</p>
    <div class="pathway-switch-card">
      <button class="${S.pathway==='fit'?'active':''}" onclick="setPathway('fit')">Fit & Lean<br><small>fitness e ricomposizione</small></button>
      <button class="${S.pathway==='built'?'active':''}" onclick="setPathway('built')">Strong & Built<br><small>forza e massa</small></button>
    </div>
    <div class="grid">
      <div class="stat"><small>Main</small><b>${w.main.split(' ')[0]}</b></div>
      <div class="stat"><small>Core</small><b>${w.core.includes('x2')?'2x':'1x'}</b></div>
      <div class="stat"><small>Cardio</small><b>${w.steady==='0'?'—':w.steady.split(' ')[2]||'SS'}</b></div>
      <div class="stat"><small>HIIT</small><b>${w.hiit==='0'?'—':w.hiit.split(' ')[1]}</b></div>
    </div>
    <div class="kpi-row">${badgeHtml(lc?.recommendation)}<span>Foundation extra: ${S.foundationExtensionWeeks||0} sett.</span><span>${S.simplifiedMode?'Modalità semplificata attiva':'Superserie/circuiti attivi'}</span></div>
  </div>
  <div class="card"><h3>Allenamento consigliato oggi</h3><p class="sub">${wo.title} · ${wo.duration}</p><button class="primary full" onclick="showTab('guided')">Avvia procedura guidata</button></div>
  <div class="card">
    <h3>Azioni adattive rapide</h3>
    <div class="row gap wrap">
      <button class="primary" onclick="showTab('checkin')">Check-in settimanale</button>
      <button onclick="repeatWeek()">Ripeti settimana</button>
      <button onclick="advanceWeek()">Passa alla settimana successiva</button>
      <button onclick="toggleSimplifiedMode()">${S.simplifiedMode?'Disattiva':'Attiva'} modalità semplificata</button>
    </div>
  </div>
  <div class="card"><h3>Checklist settimana</h3>${check('Main workout',w.main)}${check('Core',w.core)}${check('Blast',w.blast)}${check('Steady state',w.steady)}${check('HIIT',w.hiit)}<button class="secondary full" onclick="showTab('advice')">Apri consiglio della settimana</button></div>`;
}

function renderProgram(){
  ensureAdaptiveState();
  const weeks=Array.from({length:totalWeeks()},(_,i)=>{const wk=i+1; const w=currentWeekFor(wk); return {week:wk, phase:w.phase, baseWeek:w.baseWeek, extended:w.extended};});
  $('#program').innerHTML=`
  <div class="card"><h2>Programma adattivo ${totalWeeks()} settimane</h2><p class="sub">Percorso: <strong>${pathwayName()}</strong>. Foundation normale = 4 settimane; se la estendi, Progression e Ultimate slittano in avanti.</p><div class="week-grid">${weeks.map(w=>`<button class="weekbtn ${w.week===S.week?'current':''}" onclick="S.week=${w.week};save();renderAll()">W${w.week}<br><small>${w.phase[0]}${w.extended?'*':''}</small></button>`).join('')}</div></div>
  <div class="card"><h3>Settimana ${S.week} ${isCheckpointWeek()?'· '+checkpointLabel():''}</h3>${weekDetails(currentWeek())}</div>
  <div class="card"><h3>Workout della fase</h3>${workoutIdsForWeek().map(id=>workoutMini(DB.workouts[id],id)).join('')}</div>
  <div class="card"><h3>Estendi Foundation</h3><p class="sub">Da usare quando i criteri minimi non sono rispettati. Non è un fallimento: è progressione intelligente.</p><div class="row gap wrap"><button onclick="extendFoundation(1)">+1 settimana</button><button onclick="extendFoundation(2)">+2 settimane</button><button onclick="extendFoundation(4)">+4 settimane</button><button onclick="extendFoundation(4)">Ripeti intera Foundation</button></div></div>
  <div class="card"><h3>Superserie, tri-set e circuiti</h3>${groupingGuideHtml()}<button class="secondary full" onclick="toggleSimplifiedMode()">${S.simplifiedMode?'Torna a superserie/circuiti':'Modalità semplificata: serie tradizionali'}</button></div>`;
}

function currentWeekFor(displayWeek){
  const old=S.week; S.week=displayWeek; const w=currentWeek(); S.week=old; return w;
}

function groupingGuideHtml(){
  return `<div class="mode-card"><p><strong>A1/A2</strong> = superserie: A1 → recupero → A2 → recupero → torna ad A1.</p><p><strong>A1/A2/A3</strong> = tri-set. <strong>4+ esercizi collegati</strong> = circuito.</p><p class="sub">Se sei troppo affaticato, la modalità semplificata trasforma tutto in serie tradizionali: fai tutte le serie di un esercizio, poi passa al successivo.</p></div>`;
}

function extendFoundation(n){
  ensureAdaptiveState();
  S.foundationExtensionWeeks += Number(n||0);
  S.totalProgramWeeks=totalWeeks();
  save(); renderAll(); showTab('program');
}

function repeatWeek(){ alert('Settimana mantenuta: ripeti questa settimana con tecnica pulita e recuperi adeguati.'); }
function advanceWeek(){ ensureAdaptiveState(); S.week=Math.min(totalWeeks(), S.week+1); save(); renderAll(); showTab('program'); }
function toggleSimplifiedMode(){ S.simplifiedMode=!S.simplifiedMode; save(); renderAll(); }


const PLANNER_DAYS = ['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];
const PLANNER_DAY_KEYS = ['mon','tue','wed','thu','fri','sat','sun'];
const PLANNER_SLOTS = [
  ['morning','Mattina'],
  ['afternoon','Pomeriggio'],
  ['evening','Sera']
];
const PLANNER_CATEGORIES = {resistance:'Resistenza', cardio:'Cardio', activity:'Attività'};

function plannerKey(week=S.week, pathway=S.pathway){ return `${pathway}-w${week}`; }
function plannerStore(){ ensureAdaptiveState(); const key=plannerKey(); if(!S.weeklyPlanner[key]) S.weeklyPlanner[key]=buildPlannerTemplate('auto'); return S.weeklyPlanner[key]; }
function emptyPlanner(template='custom'){
  return {week:S.week, pathway:S.pathway, template, weekCommencing:'', generatedAt:new Date().toISOString(), days:Object.fromEntries(PLANNER_DAY_KEYS.map(k=>[k,{morning:[],afternoon:[],evening:[]}]))};
}
function plannerItem(title, category='resistance', minutes=0, note=''){
  return {id:'p'+Math.random().toString(36).slice(2,10), title, category, minutes:Number(minutes||0), note, done:false};
}
function addPlannerItem(plan, dayKey, slot, title, category='resistance', minutes=0, note=''){
  plan.days[dayKey][slot].push(plannerItem(title,category,minutes,note));
}
function preferredSlots(timePref='morning'){
  if(timePref==='evening') return {main:'evening', core:'afternoon', cardio:'morning', activity:'afternoon'};
  if(timePref==='mixed') return {main:'evening', core:'morning', cardio:'morning', activity:'afternoon'};
  return {main:'morning', core:'afternoon', cardio:'morning', activity:'evening'};
}
function currentFatigueLevel(){
  const c=(S.weeklyCheckins||[]).find(x=>Number(x.weekNumber)===Number(S.week)) || (S.weeklyCheckins||[])[0];
  const f=Number(c?.fatigueScore||0), r=Number(c?.recoveryScore||10);
  if(c?.recommendation?.level==='red' || f>=8 || r<=4) return 'high';
  if(c?.recommendation?.level==='yellow' || f>=7 || r<=5) return 'medium';
  return 'normal';
}
function buildPlannerTemplate(template='auto', timePref='morning'){
  const w=currentWeek();
  if(template==='auto'){
    if(w.phase==='Foundation' && S.pathway==='fit') return beginnerFoundationPlanner();
    if(w.phase==='Progression' && S.pathway==='fit') return progressionFitPlanner(timePref);
    if(w.phase==='Progression' && S.pathway==='built') return progressionBuiltPlanner(timePref);
    if(w.phase==='Ultimate' && S.pathway==='fit') return ultimateFitPlanner(timePref);
    if(w.phase==='Ultimate' && S.pathway==='built') return ultimateBuiltPlanner(timePref);
  }
  if(template==='foundation_beginner_am') return beginnerFoundationPlanner();
  if(template==='progression_fit_lean') return progressionFitPlanner(timePref);
  if(template==='progression_built_strength') return progressionBuiltPlanner(timePref);
  if(template==='progression_low_time') return progressionLowTimePlanner(timePref);
  if(template==='ultimate_fit_conditioning') return ultimateFitPlanner(timePref);
  if(template==='ultimate_built_strength') return ultimateBuiltPlanner(timePref);
  if(template==='ultimate_joint_recovery') return ultimateJointRecoveryPlanner(timePref);
  if(template==='low_fatigue_recovery') return recoveryPlanner();
  return adaptiveCurrentWeekPlanner(timePref);
}
function beginnerFoundationPlanner(){
  const p=emptyPlanner('foundation_beginner_am');
  p.description='Principiante Foundation: main workout al mattino, trainer la sera, cardio distribuito e molta attività moderata.';
  // Modello beginner Foundation: 3 Foundation Builder, 1 Blast/Core, 5 trainer, cardio e attività moderata.
  addPlannerItem(p,'mon','morning','Foundation Builder 1','resistance',30,'Main workout');
  addPlannerItem(p,'mon','morning','Walk to work 10 min','activity',10,'NEAT');
  addPlannerItem(p,'mon','evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica trazioni/dips');
  addPlannerItem(p,'mon','evening','Walk home 10 min','activity',10,'NEAT');
  addPlannerItem(p,'tue','morning','30 minute run','cardio',30,'Vigoroso/moderato alto');
  addPlannerItem(p,'tue','morning','Walk to work 10 min','activity',10,'NEAT');
  addPlannerItem(p,'tue','evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica trazioni/dips');
  addPlannerItem(p,'tue','evening','Walk home 10 min','activity',10,'NEAT');
  addPlannerItem(p,'wed','morning','Foundation Builder 2','resistance',30,'Main workout');
  addPlannerItem(p,'wed','morning','Walk to work 10 min','activity',10,'NEAT');
  addPlannerItem(p,'wed','afternoon','20 min lunch walk','activity',20,'Camminata leggera');
  addPlannerItem(p,'wed','evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica trazioni/dips');
  addPlannerItem(p,'wed','evening','Walk home 10 min','activity',10,'NEAT');
  addPlannerItem(p,'thu','morning','20 minute HIIT sprints','cardio',20,'Riduci se fatica alta');
  addPlannerItem(p,'thu','morning','Walk to work 10 min','activity',10,'NEAT');
  addPlannerItem(p,'thu','evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica trazioni/dips');
  addPlannerItem(p,'thu','evening','Walk home 10 min','activity',10,'NEAT');
  addPlannerItem(p,'fri','morning','Foundation Builder 3','resistance',30,'Main workout');
  addPlannerItem(p,'fri','morning','Walk to work 10 min','activity',10,'NEAT');
  addPlannerItem(p,'fri','evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica trazioni/dips');
  addPlannerItem(p,'fri','evening','Walk home 10 min','activity',10,'NEAT');
  addPlannerItem(p,'sat','morning','Full Body Blast & Core','resistance',25,'Blast + core');
  addPlannerItem(p,'sat','morning','30 minute run','cardio',30,'Cardio continuo');
  addPlannerItem(p,'sat','afternoon','2 hour trek / camminata lunga','activity',120,'Attività moderata');
  addPlannerItem(p,'sun','morning','Recupero / mobilità leggera','activity',0,'Opzionale');
  return p;
}
function workoutTitle(id, fallback='Workout'){ return DB.workouts[id]?.title || fallback; }
function addWeekdayNeat(p, minutes=20){
  ['mon','tue','wed','thu','fri'].forEach(d=>addPlannerItem(p,d,'afternoon',`Camminata / passi ${minutes} min`,'activity',minutes,'NEAT sostenibile'));
}
function progressionFitPlanner(timePref='morning'){
  const p=emptyPlanner('progression_fit_lean'); const s=preferredSlots(timePref); const ids=['ripped-a','ripped-b','ripped-c'];
  p.description='Progression Fit & Lean: 3 Ripped and Ready, core/blast, steady state e HIIT solo se il recupero è buono.';
  addPlannerItem(p,'mon',s.main,workoutTitle(ids[0],'Ripped and Ready A'),'resistance',40,'Main workout 1');
  addPlannerItem(p,'wed',s.main,workoutTitle(ids[1],'Ripped and Ready B'),'resistance',40,'Main workout 2');
  addPlannerItem(p,'fri',s.main,workoutTitle(ids[2],'Ripped and Ready C'),'resistance',40,'Main workout 3');
  addPlannerItem(p,'tue',s.cardio,'Steady State 25–35 min','cardio',30,'Camminata veloce / jogging leggero');
  addPlannerItem(p,'thu',s.cardio,'HIIT 10–15 min','cardio',15,'30 sec intenso + 90 sec recupero, solo se recupero buono');
  addPlannerItem(p,'sat','morning','Core Conquerer 10–15 min + Full Body Blast LV2','resistance',25,'Core + blast controllato');
  addPlannerItem(p,'sun','morning','Camminata lunga 45–60 min','activity',50,'Base aerobica, no stress articolare');
  addWeekdayNeat(p,20);
  return p;
}
function progressionBuiltPlanner(timePref='evening'){
  const p=emptyPlanner('progression_built_strength'); const s=preferredSlots(timePref); const ids=['muscle-1','muscle-2','muscle-3'];
  p.description='Progression Strong & Built: 3 Muscle Builder con recupero maggiore, core leggero e cardio limitato per non interferire con forza/ipertrofia.';
  addPlannerItem(p,'mon',s.main,workoutTitle(ids[0],'Muscle Builder 1'),'resistance',45,'Ipertrofia full body');
  addPlannerItem(p,'wed',s.main,workoutTitle(ids[1],'Muscle Builder 2'),'resistance',45,'Ipertrofia full body');
  addPlannerItem(p,'sat',s.main,workoutTitle(ids[2],'Muscle Builder 3'),'resistance',45,'Seduta più distante per recuperare');
  addPlannerItem(p,'thu',s.core,'Core Conquerer 10–15 min','resistance',15,'No cedimento');
  addPlannerItem(p,'tue','afternoon','Camminata 30 min','activity',30,'Cardio leggero');
  addPlannerItem(p,'fri','afternoon','Camminata 20–30 min','activity',25,'Recupero attivo');
  addPlannerItem(p,'sun','morning','Mobilità + passeggiata facile','activity',30,'Recupero');
  addWeekdayNeat(p,15);
  return p;
}
function progressionLowTimePlanner(timePref='evening'){
  const p=emptyPlanner('progression_low_time'); const s=preferredSlots(timePref); const ids=S.pathway==='built'?['muscle-1','muscle-2','muscle-3']:['ripped-a','ripped-b','ripped-c'];
  p.description='Progression poco tempo: sedute principali concentrate, cardio minimo e attività moderata per mantenere costanza.';
  addPlannerItem(p,'tue',s.main,workoutTitle(ids[0],'Workout Progression 1'),'resistance',35,'Main compatto');
  addPlannerItem(p,'thu',s.main,workoutTitle(ids[1],'Workout Progression 2'),'resistance',35,'Main compatto');
  addPlannerItem(p,'sat','morning',workoutTitle(ids[2],'Workout Progression 3'),'resistance',40,'Main weekend');
  addPlannerItem(p,'sun','morning','Core Conquerer 10 min','resistance',10,'Opzionale se recuperato');
  ['mon','wed','fri'].forEach(d=>addPlannerItem(p,d,'afternoon','Camminata 20 min','activity',20,'NEAT minimo'));
  return p;
}
function ultimateFitPlanner(timePref='morning'){
  const p=emptyPlanner('ultimate_fit_conditioning'); const s=preferredSlots(timePref); const ids=['extreme-a','extreme-b','extreme-c'];
  p.description='Ultimate Fit & Lean: Extreme Fit, Killer Core, Blast LV3, cardio bilanciato e opzione scarico se fatica alta.';
  addPlannerItem(p,'mon',s.main,workoutTitle(ids[0],'Extreme Fit A'),'resistance',55,'Circuito intenso');
  addPlannerItem(p,'wed',s.main,workoutTitle(ids[1],'Extreme Fit B'),'resistance',55,'Circuito intenso');
  addPlannerItem(p,'fri',s.main,workoutTitle(ids[2],'Extreme Fit C'),'resistance',55,'Circuito intenso');
  addPlannerItem(p,'tue',s.cardio,'Steady State 30–45 min','cardio',40,'Zona facile/moderata');
  addPlannerItem(p,'thu',s.cardio,'HIIT 10–20 min','cardio',15,'Riduci se check-in giallo/rosso');
  addPlannerItem(p,'sat','morning','Killer Core 20–30 min + Full Body Blast LV3','resistance',35,'Solo se tecnica pulita');
  addPlannerItem(p,'sun','morning','Camminata lunga / recupero attivo 45–90 min','activity',60,'Niente cedimento');
  addWeekdayNeat(p,20);
  return p;
}
function ultimateBuiltPlanner(timePref='evening'){
  const p=emptyPlanner('ultimate_built_strength'); const s=preferredSlots(timePref);
  p.description='Ultimate Strong & Built: push/pull/legs con recuperi ampi, core mirato e cardio controllato per proteggere performance e articolazioni.';
  addPlannerItem(p,'mon',s.main,workoutTitle('hardcore-push','Hardcore Strength Push'),'resistance',55,'Forza/spinta');
  addPlannerItem(p,'wed',s.main,workoutTitle('hardcore-pull','Hardcore Strength Pull'),'resistance',55,'Forza/tirata');
  addPlannerItem(p,'fri',s.main,workoutTitle('hardcore-legs','Hardcore Strength Legs'),'resistance',55,'Gambe e glutei');
  addPlannerItem(p,'tue','afternoon','Camminata 30 min + mobilità spalle/polsi','activity',30,'Recupero attivo');
  addPlannerItem(p,'thu',s.core,'Killer Core 15–20 min','resistance',20,'Tecnica, no cedimento se lombari affaticati');
  addPlannerItem(p,'sat','morning','Full Body Blast LV3 leggero oppure tecnica skill','resistance',15,'Opzionale, qualità > volume');
  addPlannerItem(p,'sun','morning','Recupero completo / passeggiata facile','activity',30,'Priorità a sonno e articolazioni');
  addWeekdayNeat(p,15);
  return p;
}
function ultimateJointRecoveryPlanner(timePref='morning'){
  const p=emptyPlanner('ultimate_joint_recovery'); const s=preferredSlots(timePref);
  p.description='Ultimate recupero articolazioni: mantiene la routine ma scala volume, elimina HIIT e aumenta camminate/steady state facili.';
  addPlannerItem(p,'mon',s.main,'Main workout scalato 60–70%','resistance',35,'Regressioni, recupero esteso');
  addPlannerItem(p,'wed',s.main,'Tecnica pull/dip + core leggero','resistance',25,'No cedimento, stop se dolore');
  addPlannerItem(p,'fri',s.main,'Main workout scalato 60–70%','resistance',35,'Qualità tecnica');
  ['tue','thu','sat'].forEach(d=>addPlannerItem(p,d,'morning','Steady State facile 25–40 min','cardio',30,'No HIIT'));
  ['mon','tue','wed','thu','fri','sat'].forEach(d=>addPlannerItem(p,d,'afternoon','Mobilità + camminata leggera 15–20 min','activity',20,'Recupero articolare'));
  addPlannerItem(p,'sun','morning','Riposo completo','activity',0,'Sonno, idratazione, scarico');
  return p;
}
function adaptiveCurrentWeekPlanner(timePref='morning'){
  const w=currentWeek();
  if(w.phase==='Progression' && S.pathway==='fit') return progressionFitPlanner(timePref);
  if(w.phase==='Progression' && S.pathway==='built') return progressionBuiltPlanner(timePref);
  if(w.phase==='Ultimate' && S.pathway==='fit') return ultimateFitPlanner(timePref);
  if(w.phase==='Ultimate' && S.pathway==='built') return ultimateBuiltPlanner(timePref);
  const p=emptyPlanner('adaptive_current_week'); const ids=workoutIdsForWeek(); const s=preferredSlots(timePref);
  const mainNames = ids.map((id,i)=>DB.workouts[id]?.title || `Workout ${i+1}`);
  addPlannerItem(p,'mon',s.main,mainNames[0] || w.main,'resistance',35,'Main workout 1');
  addPlannerItem(p,'wed',s.main,mainNames[1] || w.main,'resistance',35,'Main workout 2');
  addPlannerItem(p,'fri',s.main,mainNames[2] || w.main,'resistance',35,'Main workout 3');
  if(w.phase==='Foundation'){
    ['mon','tue','wed','thu','fri'].forEach(d=>addPlannerItem(p,d,'evening','Pull up & dip trainer 10 min','resistance',10,'Tecnica'));
  }
  if(w.core && w.core!=='0') addPlannerItem(p,'sat','morning',w.core.replace('x1','').replace('x2',''),'resistance',15,'Core');
  if(w.blast && w.blast!=='0') addPlannerItem(p,'sat','morning',w.blast.replace('x1',''),'resistance',10,'Blast');
  if(w.steady && w.steady!=='0') { addPlannerItem(p,'tue',s.cardio,'Steady State 20–40 min','cardio',30,'Camminata veloce / run leggero'); addPlannerItem(p,'sat','afternoon','Camminata lunga 45–90 min','activity',60,'NEAT'); }
  if(w.hiit && w.hiit!=='0') addPlannerItem(p,'thu',s.cardio,'HIIT 10–20 min','cardio',15,'Solo se recupero buono');
  ['mon','tue','wed','thu','fri'].forEach(d=>{ addPlannerItem(p,d,'morning','Camminata 10 min','activity',10,'NEAT'); addPlannerItem(p,d,'evening','Camminata 10 min','activity',10,'NEAT'); });
  addPlannerItem(p,'sun','morning','Recupero / stretching leggero','activity',0,'Opzionale');
  return p;
}
function recoveryPlanner(){
  const p=emptyPlanner('low_fatigue_recovery'); const ids=workoutIdsForWeek();
  p.description='Scarico / fatica alta: riduce HIIT e volume, mantiene tecnica e attività leggera.';
  addPlannerItem(p,'mon','morning',DB.workouts[ids[0]]?.title || 'Main workout scalato','resistance',30,'Usa regressioni');
  addPlannerItem(p,'wed','morning','Core leggero / tecnica','resistance',15,'No cedimento');
  addPlannerItem(p,'fri','morning',DB.workouts[ids[1]]?.title || 'Main workout scalato','resistance',30,'Volume ridotto');
  ['mon','tue','wed','thu','fri','sat'].forEach(d=>addPlannerItem(p,d,'afternoon','Camminata leggera 20–30 min','activity',25,'Sostituisce HIIT'));
  addPlannerItem(p,'sun','morning','Recupero completo','activity',0,'Sonno e mobilità');
  return p;
}
function plannerTotals(plan=plannerStore()){
  const totals={resistanceCount:0, vigorousCardio:0, moderateActivity:0, trainerCount:0, done:0, total:0};
  Object.values(plan.days).forEach(day=>Object.values(day).forEach(items=>items.forEach(it=>{
    totals.total++; if(it.done) totals.done++;
    if(it.category==='resistance'){ totals.resistanceCount++; if((it.title||'').toLowerCase().includes('trainer')) totals.trainerCount++; }
    if(it.category==='cardio') totals.vigorousCardio += Number(it.minutes||0);
    if(it.category==='activity') totals.moderateActivity += Number(it.minutes||0);
  })));
  return totals;
}
function templateLabel(t){ return ({
  foundation_beginner_am:'Principiante Foundation AM',
  adaptive_current_week:'Adattivo settimana corrente',
  progression_fit_lean:'Progression Fit & Lean',
  progression_built_strength:'Progression Strong & Built',
  progression_low_time:'Progression poco tempo',
  ultimate_fit_conditioning:'Ultimate Fit & Lean',
  ultimate_built_strength:'Ultimate Strong & Built',
  ultimate_joint_recovery:'Ultimate recupero articolazioni',
  low_fatigue_recovery:'Scarico / fatica alta',
  custom:'Personalizzato', auto:'Automatico'
})[t] || t; }
function plannerRecommendedTemplate(){
  const w=currentWeek();
  if(currentFatigueLevel()==='high') return 'low_fatigue_recovery';
  if(w.phase==='Foundation') return 'foundation_beginner_am';
  if(w.phase==='Progression' && S.pathway==='fit') return 'progression_fit_lean';
  if(w.phase==='Progression' && S.pathway==='built') return 'progression_built_strength';
  if(w.phase==='Ultimate' && S.pathway==='fit') return 'ultimate_fit_conditioning';
  if(w.phase==='Ultimate' && S.pathway==='built') return 'ultimate_built_strength';
  return 'adaptive_current_week';
}
function plannerTemplateOptions(selected){
  const opts=[
    ['foundation_beginner_am','Principiante Foundation AM'],
    ['adaptive_current_week','Adattivo settimana corrente'],
    ['progression_fit_lean','Progression Fit & Lean'],
    ['progression_built_strength','Progression Strong & Built'],
    ['progression_low_time','Progression poco tempo'],
    ['ultimate_fit_conditioning','Ultimate Fit & Lean'],
    ['ultimate_built_strength','Ultimate Strong & Built'],
    ['ultimate_joint_recovery','Ultimate recupero articolazioni'],
    ['low_fatigue_recovery','Scarico / fatica alta']
  ];
  return opts.map(([v,l])=>`<option value="${v}" ${selected===v?'selected':''}>${l}</option>`).join('');
}
function renderPlanner(){
  ensureAdaptiveState();
  const plan=plannerStore(); const totals=plannerTotals(plan); const today=(new Date().getDay()+6)%7; const rec=plannerRecommendedTemplate();
  $('#planner').innerHTML=`
  <div class="card"><h2>Calendario / Planner settimanale</h2><p class="sub">Programma la settimana per giorno e fascia oraria: resistenza, cardio e attività quotidiana. Ora ci sono template specifici per Foundation, Progression e Ultimate, con differenza tra Fit & Lean e Strong & Built.</p>
    <div class="planner-toolbar">
      <label>Template<select id="plannerTemplate">${plannerTemplateOptions(plan.template)}</select></label>
      <label>Settimana che inizia<input id="plannerCommencing" value="${plan.weekCommencing||''}" placeholder="es. lunedì 1 luglio"></label>
      <label>Preferenza oraria<select id="plannerTimePref"><option value="morning" ${(plan.timePreference||'morning')==='morning'?'selected':''}>Mattina</option><option value="evening" ${(plan.timePreference||'morning')==='evening'?'selected':''}>Sera</option><option value="mixed" ${(plan.timePreference||'morning')==='mixed'?'selected':''}>Misto</option></select></label>
    </div>
    <div class="planner-actions"><button class="primary" onclick="generatePlannerFromUI()">Genera calendario</button><button onclick="generateRecommendedPlanner()">Template consigliato</button><button onclick="adaptPlannerToFatigue()">Adatta alla fatica</button><button onclick="resetPlannerWeek()">Reset settimana</button><button onclick="savePlannerMeta()">Salva intestazione</button></div>
    <div class="planner-summary"><div class="stat"><small>Resistenza</small><b>${totals.resistanceCount}</b></div><div class="stat"><small>Trainer</small><b>${totals.trainerCount}</b></div><div class="stat"><small>Cardio vigoroso</small><b>${totals.vigorousCardio} min</b></div><div class="stat"><small>Attività moderata</small><b>${totals.moderateActivity} min</b></div><div class="stat"><small>Completati</small><b>${totals.done}/${totals.total}</b></div></div>
    <p class="planner-note"><strong>Consigliato ora:</strong> ${templateLabel(rec)}. ${plan.description||'Se il check-in è giallo/rosso, riduci HIIT e aumenta recupero/steady state.'}</p>
  </div>
  <div class="planner-grid">${PLANNER_DAY_KEYS.map((dk,i)=>dayPlannerHtml(plan,dk,i,today)).join('')}</div>`;
}
function dayPlannerHtml(plan, dayKey, idx, todayIdx){
  const day=plan.days[dayKey];
  return `<div class="day-card ${idx===todayIdx?'today':''}"><h3>${PLANNER_DAYS[idx]} ${idx===todayIdx?'<span class="badge green">oggi</span>':''}</h3>${PLANNER_SLOTS.map(([slot,label])=>slotPlannerHtml(plan,dayKey,slot,label,day[slot]||[])).join('')}</div>`;
}
function slotPlannerHtml(plan,dayKey,slot,label,items){
  return `<div class="slot-card"><h4>${label}</h4>${items.map(it=>plannerItemHtml(dayKey,slot,it)).join('')||'<p class="sub">—</p>'}<details class="planner-edit"><summary>Aggiungi/modifica</summary><label>Nuova attività<textarea id="add-${dayKey}-${slot}" placeholder="es. camminata 20 min"></textarea></label><div class="row gap"><select id="cat-${dayKey}-${slot}"><option value="resistance">Resistenza</option><option value="cardio">Cardio</option><option value="activity">Attività</option></select><input id="min-${dayKey}-${slot}" type="number" min="0" placeholder="min"></div><button class="secondary full" onclick="addPlannerCustomItem('${dayKey}','${slot}')">Aggiungi</button></details></div>`;
}
function plannerItemHtml(dayKey,slot,it){
  return `<div class="planner-item ${it.done?'done':''}"><input type="checkbox" ${it.done?'checked':''} onchange="togglePlannerDone('${dayKey}','${slot}','${it.id}')"><span><b>${it.title}</b><small>${PLANNER_CATEGORIES[it.category]||it.category}${it.minutes?` · ${it.minutes} min`:''}${it.note?` · ${it.note}`:''}</small></span><button aria-label="Rimuovi" onclick="removePlannerItem('${dayKey}','${slot}','${it.id}')">×</button></div>`;
}
function generatePlannerFromUI(){
  ensureAdaptiveState(); const template=$('#plannerTemplate').value; const timePref=$('#plannerTimePref')?.value || 'morning'; const p=buildPlannerTemplate(template,timePref); p.weekCommencing=$('#plannerCommencing').value; p.timePreference=timePref; S.weeklyPlanner[plannerKey()]=p; save(); renderPlanner();
}
function generateRecommendedPlanner(){
  ensureAdaptiveState(); const timePref=$('#plannerTimePref')?.value || plannerStore().timePreference || 'morning'; const p=buildPlannerTemplate(plannerRecommendedTemplate(), timePref); p.weekCommencing=$('#plannerCommencing')?.value || plannerStore().weekCommencing || ''; p.timePreference=timePref; S.weeklyPlanner[plannerKey()]=p; save(); renderPlanner();
}
function savePlannerMeta(){ const p=plannerStore(); p.weekCommencing=$('#plannerCommencing').value; p.timePreference=$('#plannerTimePref')?.value || p.timePreference || 'morning'; save(); renderPlanner(); }
function resetPlannerWeek(){ if(confirm('Rigenerare il planner della settimana corrente?')){ const timePref=$('#plannerTimePref')?.value || 'morning'; S.weeklyPlanner[plannerKey()]=buildPlannerTemplate('auto',timePref); S.weeklyPlanner[plannerKey()].timePreference=timePref; save(); renderPlanner(); } }
function adaptPlannerToFatigue(){ const timePref=$('#plannerTimePref')?.value || 'morning'; S.weeklyPlanner[plannerKey()]=currentWeek().phase==='Ultimate' ? ultimateJointRecoveryPlanner(timePref) : recoveryPlanner(); S.weeklyPlanner[plannerKey()].timePreference=timePref; save(); renderPlanner(); }
function togglePlannerDone(dayKey,slot,id){ const p=plannerStore(); const it=(p.days[dayKey][slot]||[]).find(x=>x.id===id); if(it) it.done=!it.done; save(); renderPlanner(); }
function removePlannerItem(dayKey,slot,id){ const p=plannerStore(); p.days[dayKey][slot]=(p.days[dayKey][slot]||[]).filter(x=>x.id!==id); p.template='custom'; save(); renderPlanner(); }
function addPlannerCustomItem(dayKey,slot){ const p=plannerStore(); const title=$(`#add-${dayKey}-${slot}`).value.trim(); if(!title) return; const cat=$(`#cat-${dayKey}-${slot}`).value; const min=+$(`#min-${dayKey}-${slot}`).value||0; addPlannerItem(p,dayKey,slot,title,cat,min,'manuale'); p.template='custom'; save(); renderPlanner(); }

function renderCheckin(){
  ensureAdaptiveState();
  const prev=checkinForWeek();
  const painOptions=['spalle','gomiti','polsi','schiena','ginocchia'];
  $('#checkin').innerHTML=`
  <div class="card"><h2>${checkpointLabel()}</h2><p class="sub">Compila alla fine della settimana. La app valuta se continuare, scalare, ripetere o estendere Foundation.</p>${prev?`<p>${badgeHtml(prev.recommendation)}</p>`:''}</div>
  <div class="card">
    <div class="form-grid">
      <label>Main workout completati<select id="ciMain"><option>0</option><option>1</option><option selected>2</option><option>3</option></select></label>
      <label>Core/blast/cardio previsti<select id="ciSupport"><option value="yes">Sì, completati</option><option value="partial">Parzialmente</option><option value="no">No</option></select></label>
      <label>Reps principali rispetto al target<select id="ciReps"><option value="90">70–100%</option><option value="55">40–70%</option><option value="30">meno del 40%</option></select></label>
      <label>Tecnica pulita 1–10<input id="ciTechnique" type="number" min="1" max="10" value="7"></label>
      <label>Fatica 1–10<input id="ciFatigue" type="number" min="1" max="10" value="6"></label>
      <label>Recupero 1–10<input id="ciRecovery" type="number" min="1" max="10" value="6"></label>
      <label>Sonno 1–10<input id="ciSleep" type="number" min="1" max="10" value="6"></label>
      <label>Tecnica generale<select id="ciClean"><option value="yes">Pulita</option><option value="partial">Non sempre stabile</option><option value="no">Scadente</option></select></label>
    </div>
    <h3>Dolore articolare o fastidi</h3>
    <div class="row gap wrap">${painOptions.map(p=>`<label class="smallpill"><input type="checkbox" data-pain="${p}"> ${p}</label>`).join('')}</div>
    <label>Note personali<textarea id="ciNotes" placeholder="Sensazioni, esercizi difficili, sonno, stress, dolori..."></textarea></label>
    <button class="primary full" onclick="saveWeeklyCheckin()">Salva check-in e genera consiglio</button>
  </div>
  <div class="card"><h3>Criteri automatici</h3><ul class="reason-list"><li><strong>Verde:</strong> almeno 2 main workout, tecnica buona, nessun dolore, reps ≥70%, fatica gestibile.</li><li><strong>Giallo:</strong> reps 40–70%, tecnica non sempre stabile o fatica alta ma gestibile.</li><li><strong>Rosso:</strong> meno del 40%, dolore, tecnica scadente, fatica molto alta o meno di 2 main workout.</li></ul></div>`;
}

function saveWeeklyCheckin(){
  ensureAdaptiveState();
  const painAreas=$$('[data-pain]:checked').map(x=>x.dataset.pain);
  let technique=+$('#ciTechnique').value||7;
  const clean=$('#ciClean').value;
  if(clean==='partial') technique=Math.min(technique,6);
  if(clean==='no') technique=Math.min(technique,4);
  const entry={
    weekNumber:S.week, phase:currentWeek().phase, pathway:S.pathway,
    completedMainWorkouts:+$('#ciMain').value,
    completedCore:$('#ciSupport').value,
    completedCardio:$('#ciSupport').value,
    averageRepsRatio:+$('#ciReps').value,
    techniqueScore:technique,
    fatigueScore:+$('#ciFatigue').value||6,
    recoveryScore:+$('#ciRecovery').value||6,
    sleepScore:+$('#ciSleep').value||6,
    painAreas,
    notes:$('#ciNotes').value||'',
    savedAt:new Date().toISOString(),
    savedDate:new Date().toLocaleDateString('it-IT')
  };
  entry.recommendation=evaluateWeeklyCheckin(entry);
  S.weeklyCheckins = S.weeklyCheckins.filter(c=>!(Number(c.weekNumber)===Number(S.week)&&c.pathway===S.pathway));
  S.weeklyCheckins.unshift(entry);
  S.adaptiveAdvice=entry.recommendation;
  save(); renderAll(); showTab('advice');
}

function renderAdvice(){
  ensureAdaptiveState();
  const c=checkinForWeek()||lastCheckin();
  const rec=c?.recommendation;
  $('#advice').innerHTML=`
  <div class="card"><h2>Consiglio della settimana</h2>${badgeHtml(rec)}<p class="sub">${rec?rec.action:'Fai il check-in settimanale per ricevere un consiglio automatico.'}</p>${rec?`<ul class="reason-list">${rec.reasons.map(r=>`<li>${r}</li>`).join('')}</ul>`:''}</div>
  <div class="card"><h3>Azioni consigliate</h3><div class="row gap wrap">
    <button class="primary" onclick="advanceWeek()">Passa alla fase/settimana successiva</button>
    <button onclick="repeatWeek()">Ripeti settimana</button>
    <button onclick="extendFoundation(1)">Estendi Foundation +1</button>
    <button onclick="extendFoundation(2)">Estendi Foundation +2</button>
    <button onclick="showTab('library')">Usa regressione</button>
    <button onclick="showTab('cardio')">Adatta cardio</button>
  </div></div>
  <div class="card"><h3>Checkpoint di fase</h3><p class="sub">${checkpointLabel()}. Passa alla fase successiva solo se hai completato circa il 70% dei main workout, tecnica accettabile, nessun dolore articolare, test stabili/migliori e fatica gestibile.</p><p>${isCheckpointWeek()?'<span class="badge yellow">Checkpoint attivo: valuta con attenzione prima di avanzare</span>':'<span class="badge gray">Checkpoint non attivo questa settimana</span>'}</p></div>`;
}

function scalingForExercise(name){
  const id=slug(name);
  return ADAPTIVE_SCALING[id] || guessScaling(name);
}

function guessScaling(name){
  const n=name.toLowerCase();
  if(n.includes('pull') || n.includes('chin')) return ['Band-assisted version','Partial range','Inverted Row'];
  if(n.includes('dip')) return ['Partial Dips','Feet-assisted dips'];
  if(n.includes('hanging') || n.includes('toes') || n.includes('l-sit')) return ['Knee raise / tuck version','Tenuta più breve'];
  if(n.includes('squat') || n.includes('lunge')) return ['Versione assistita','Range più corto controllato'];
  if(n.includes('press')) return ['Sbarra più alta','Versione inclinata'];
  return ['Riduci range o tempo','Usa una variante più facile','Aumenta il recupero'];
}

function scaleSuggestionHtml(name){
  const opts=scalingForExercise(name);
  return `<div class="scale-card"><strong>Regressione suggerita</strong><p class="sub">Se fai 40–70% del target usa scaling; sotto il 40% scegli la prima regressione e valuta Foundation estesa.</p><ul>${opts.map(o=>`<li>${o}</li>`).join('')}</ul></div>`;
}

function useRegression(idOrName){
  const name = DB.exercises.find(e=>e.id===idOrName)?.name || idOrName;
  alert(`Regressioni per ${name}:\n- ${scalingForExercise(name).join('\n- ')}\n\nSe c’è dolore: stop, recupero o variante più facile.`);
}

function repsTargetNumber(txt){
  const nums=[...String(txt).matchAll(/\d+/g)].map(m=>+m[0]);
  if(!nums.length) return null;
  return Math.max(...nums);
}

function adaptiveRestAdvice(item, actuals, fatigue, pain){
  const target = repsTargetNumber(item.reps);
  const nums=actuals.map(Number).filter(n=>!isNaN(n)&&n>0);
  const drop = nums.length>1 ? (nums[0]-nums[nums.length-1]) / Math.max(1, nums[0]) : 0;
  let category='hypertrophy';
  const txt=(item.reps+' '+item.tempo+' '+item.rest+' '+item.name).toLowerCase();
  if(txt.includes('hold')||txt.includes('core')||txt.includes('plank')||txt.includes('l-sit')) category='core';
  if(txt.includes('explosive')||txt.includes('fast')||txt.includes('15–30')||txt.includes('0 sec')) category='conditioning';
  if(txt.includes('5–10')||txt.includes('max')||txt.includes('pull')||txt.includes('dip')) category='strengthSkill';
  let base={strengthSkill:'120–180 sec',hypertrophy:'60–90 sec',conditioning:'15–45 sec',core:'30–60 sec'}[category];
  const msgs=[`Recupero indicativo: ${base}.`];
  if(drop>=0.35) msgs.push('Il calo tra le serie è alto: aumenta il recupero o usa una regressione per mantenere qualità tecnica.');
  if(target && nums.length && (nums.reduce((a,b)=>a+b,0)/(nums.length*target))<0.4) msgs.push('Meno del 40% del target: usa regressione più facile e valuta estensione Foundation.');
  if(fatigue>=8) msgs.push('Fatica alta: abilita recupero esteso e riduci HIIT questa settimana.');
  if(pain) msgs.push('Dolore segnalato: stop, regressione o recupero. Non spingere sul dolore articolare.');
  return msgs;
}

function renderGuided(){
  ensureAdaptiveState();
  const id=guided.workoutId || todayWorkoutId(); guided.workoutId=id; const wo=DB.workouts[id]; const item=wo.exercises[guided.exerciseIndex] || wo.exercises[0]; const meta=exerciseMeta(item.name); const pct=(guided.exerciseIndex/wo.exercises.length)*100;
  $('#guided').innerHTML=`<div class="card guide-panel">
    <span class="pill">${wo.title}</span><div class="progressbar"><i style="width:${pct}%"></i></div>
    <h2>${item.name}</h2><p class="sub">Esercizio ${guided.exerciseIndex+1} di ${wo.exercises.length} · ${S.simplifiedMode?'Modalità semplificata attiva':'Ordine originale'}</p>
    <img class="exercise-img" src="${meta.img}" onerror="this.src='assets/images/generic-exercise.webp'" alt="${item.name}">
    <div class="grid"><div class="stat"><small>Serie</small><b>${guided.set}/${item.sets}</b></div><div class="stat"><small>Reps/tempo</small><b>${item.reps}</b></div><div class="stat"><small>Tempo</small><b>${item.tempo}</b></div><div class="stat"><small>Recupero</small><b>${item.rest}</b></div></div>
    <h3>Tracker adattivo esercizio</h3>
    <div class="set-grid">${Array.from({length:Number(item.sets)||3},(_,i)=>`<label>Serie ${i+1}<input id="repsSet${i+1}" type="number" min="0" placeholder="reps"></label>`).join('')}</div>
    <div class="form-grid"><label>Tecnica 1–10<input id="exTechnique" type="number" min="1" max="10" value="7"></label><label>Fatica 1–10<input id="exFatigue" type="number" min="1" max="10" value="6"></label><label>Recupero usato<input id="exRestUsed" placeholder="es. 90 sec"></label><label>Dolore?<select id="exPain"><option value="no">No</option><option value="yes">Sì</option></select></label></div>
    <label>Note esercizio<textarea id="exNotes" placeholder="difficoltà, dolore, scaling usato..."></textarea></label>
    <div class="row gap wrap"><button class="primary" onclick="saveExerciseProgress()">Salva serie reali</button><button onclick="useRegression('${item.name.replace(/'/g,"\\'")}')">Non riesco a completare le reps</button><button onclick="completeSet()">Segna serie</button></div>
    ${scaleSuggestionHtml(item.name)}
    <h3>Consiglio</h3><p>${meta.tip}</p><details><summary>Errori da evitare</summary><ul>${meta.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></details>
    <div class="timer" id="timerBox">${format(guided.seconds)}</div>
    <div class="row gap wrap"><button onclick="prevExercise()">← Precedente</button><button onclick="startSetTimer()">Timer lavoro</button><button onclick="startRest()">Recupero</button><button onclick="stopTimer()">Stop</button><button class="primary" onclick="nextExercise()">Prossimo →</button></div>
  </div>`;
}

function saveExerciseProgress(){
  ensureAdaptiveState();
  const id=guided.workoutId || todayWorkoutId(); const wo=DB.workouts[id]; const item=wo.exercises[guided.exerciseIndex] || wo.exercises[0];
  const sets=Number(item.sets)||3; const actuals=Array.from({length:sets},(_,i)=>+($('#repsSet'+(i+1))?.value||0));
  const fatigue=+$('#exFatigue').value||6; const pain=$('#exPain').value==='yes'; const tech=+$('#exTechnique').value||7;
  const advice=adaptiveRestAdvice(item, actuals, fatigue, pain);
  const target=repsTargetNumber(item.reps);
  const done=actuals.filter(n=>n>0).reduce((a,b)=>a+b,0);
  const ratio=target ? Math.round((done/(sets*target))*100) : null;
  const entry={date:new Date().toLocaleDateString('it-IT'), savedAt:new Date().toISOString(), week:S.week, phase:currentWeek().phase, pathway:S.pathway, exerciseId:slug(item.name), exerciseName:item.name, targetReps:item.reps, actualRepsPerSet:actuals, repsRatio:ratio, scalingUsed:false, restUsed:$('#exRestUsed').value||item.rest, techniqueScore:tech, difficulty:fatigue, pain, notes:$('#exNotes').value||'', suggestion:advice};
  S.exerciseProgress.unshift(entry);
  save();
  alert('Progressi salvati.\n\n'+advice.join('\n'));
  renderGuided();
}

function renderLibrary(){
  ensureAdaptiveState();
  const q=($('#search')?.value||'').toLowerCase(); const list=DB.exercises.filter(e=>!q || e.name.toLowerCase().includes(q)||e.muscles.toLowerCase().includes(q));
  $('#library').innerHTML=`<div class="card"><h2>Libreria esercizi</h2><p class="sub">Ogni esercizio difficile ha un pulsante per suggerire regressioni.</p><input id="search" class="search" placeholder="Cerca esercizio o muscolo" value="${q}" oninput="renderLibrary()"><div class="library-grid">${list.map(e=>`<div class="exercise"><img class="exercise-img" src="${e.img}" onerror="this.src='assets/images/generic-exercise.webp'" alt="${e.name}"><h4>${e.name}</h4><p class="sub">${e.muscles}</p><button class="secondary full" onclick="useRegression('${e.id}')">Non riesco a completare le reps</button><details><summary>Dettagli e scaling</summary><p>${e.tip}</p>${scaleSuggestionHtml(e.name)}<ul>${e.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></details></div>`).join('')}</div></div>`;
}

function renderCardio(){
  ensureAdaptiveState();
  const w=currentWeek(); const c=checkinForWeek()||lastCheckin(); const highFatigue=c && (+c.fatigueScore>=8 || c.recommendation?.status==='red');
  $('#cardio').innerHTML=`
  <div class="card"><h2>Cardio adattivo</h2><p class="sub">La app valorizza steady state e NEAT. Riduci HIIT se main workout, recupero o articolazioni sono già sotto stress.</p><div class="grid"><div class="stat"><small>Steady State</small><b>${w.steady}</b></div><div class="stat"><small>HIIT</small><b>${highFatigue?'Riduci':w.hiit}</b></div></div>${highFatigue?'<p><span class="badge yellow">Fatica alta: sostituisci HIIT con camminata leggera o steady state.</span></p>':''}</div>
  <div class="card"><h3>Steady state continuo</h3><p class="sub">20–60 min. Camminata veloce, jogging leggero, cyclette, vogatore, scale, nuoto. Ideale per base aerobica e calorie con stress moderato.</p></div>
  <div class="card"><h3>HIIT / interval training</h3><p class="sub">10–30 min. Esempio: 30 sec intenso + 90 sec recupero. Da usare con cautela se sei già stanco o hai dolore articolare.</p></div>
  <div class="card"><h3>Attività quotidiana / NEAT</h3><p class="sub">Per dimagrimento sostenibile punta spesso a 7.000–10.000 passi al giorno e camminate leggere.</p><div class="form-grid"><label>Passi giornalieri<input id="neatSteps" type="number" placeholder="es. 8000"></label><label>Camminata<input id="neatWalk" placeholder="minuti o km"></label><label>Scale<input id="neatStairs" placeholder="piani / minuti"></label><label>Attività leggera<input id="neatLight" placeholder="pulizie, commissioni..."></label></div><label>Note<textarea id="neatNotes"></textarea></label><button class="primary full" onclick="saveDailyActivity()">Salva attività quotidiana</button></div>
  <div class="card"><h3>Storico NEAT</h3>${(S.dailyActivity||[]).slice(0,5).map(a=>`<div class="exercise"><h4>${a.date} · ${a.steps||'-'} passi</h4><p class="sub">Camminata ${a.walk||'-'} · Scale ${a.stairs||'-'} · ${a.notes||''}</p></div>`).join('')||'<p class="sub">Nessuna attività salvata.</p>'}</div>`;
}

function saveDailyActivity(){
  ensureAdaptiveState();
  S.dailyActivity.unshift({date:new Date().toLocaleDateString('it-IT'), steps:$('#neatSteps').value, walk:$('#neatWalk').value, stairs:$('#neatStairs').value, light:$('#neatLight').value, notes:$('#neatNotes').value});
  save(); renderCardio();
}

function renderTests(){
  ensureAdaptiveState();
  const tests=['Wide Pull Ups','Dips','Strict Inverted Row','Press Up','Pistol Squat / Bulgarian Split Squat','Body Squat 1 minuto','Plank max time','Dead Hang max time','5 km run / alternativa cardio','Peso corporeo','Girovita','Foto progresso','Note'];
  $('#tests').innerHTML=`<div class="card"><h2>Fitness test integrati</h2><p class="sub">Da fare: inizio programma, settimana 4, settimana 8, settimana 12, eventuale fine Foundation estesa. Settimana attuale: ${S.week}/${totalWeeks()} ${isCheckpointWeek()?'<span class="badge yellow">checkpoint</span>':''}</p>${tests.map(t=>`<label>${t}<input data-test="${t}" placeholder="reps, tempo, misura o note"></label>`).join('')}<button class="primary full" onclick="saveTests()">Salva test</button></div><div class="card"><h3>Storico test</h3>${S.tests.slice(0,8).map(t=>`<div class="exercise"><h4>${t.date} · W${t.week||'-'}</h4><p class="sub">${Object.entries(t.values).filter(([k,v])=>v).map(([k,v])=>`${k}: ${v}`).join(' · ')||'—'}</p></div>`).join('')||'<p class="sub">Nessun test salvato.</p>'}</div>`;
}

function saveTests(){
  const entry={date:new Date().toLocaleDateString('it-IT'), week:S.week, phase:currentWeek().phase, pathway:S.pathway, values:{}};
  $$('[data-test]').forEach(i=>entry.values[i.dataset.test]=i.value);
  S.tests.unshift(entry); save(); renderTests(); renderProgress();
}

function renderProgress(){
  ensureAdaptiveState();
  const ep=(S.exerciseProgress||[]).slice(0,8).map(e=>`<div class="exercise"><h4>${e.date} · ${e.exerciseName}</h4><p class="sub">W${e.week} · reps ${e.actualRepsPerSet.join('/')} · tecnica ${e.techniqueScore}/10 · fatica ${e.difficulty}/10 · dolore ${e.pain?'sì':'no'}</p><p>${(e.suggestion||[]).join(' ')}</p></div>`).join('') || '<p class="sub">Nessun esercizio tracciato.</p>';
  $('#progress').innerHTML=`<div class="card"><h2>Tracker progressi adattivo</h2><p class="sub">Registra misure, recupero e note. Le reps reali per serie si salvano dalla schermata Guidato.</p><label>Peso corporeo<input id="bw" type="number" step="0.1" placeholder="kg"></label><label>Girovita<input id="waist" type="number" step="0.1" placeholder="cm"></label><label>Petto<input id="chest" type="number" step="0.1" placeholder="cm"></label><label>Braccio<input id="arm" type="number" step="0.1" placeholder="cm"></label><label>Coscia<input id="thigh" type="number" step="0.1" placeholder="cm"></label><label>Passi giornalieri<input id="steps" type="number" placeholder="passi"></label><label>Recupero percepito 1–10<input id="recoveryMeasure" type="number" min="1" max="10"></label><label>Dolore sì/no + zona<input id="painMeasure" placeholder="es. no / spalla destra"></label><label>Foto progresso / riferimento<input id="photoNote" placeholder="nome file o nota foto"></label><label>Energia 1–10<input id="energy" type="number" min="1" max="10"></label><label>Fatica 1–10<input id="fatigue" type="number" min="1" max="10"></label><label>Note<textarea id="measureNotes" placeholder="foto, dolori, sonno, sensazioni..."></textarea></label><button class="primary full" onclick="saveMeasure()">Salva rilevazione</button></div><div class="card"><h3>Ultimi esercizi tracciati</h3>${ep}</div><div class="card"><h3>Storico misure</h3>${historyHtml()}</div>`;
}

function saveMeasure(){
  const fields=['bw','waist','chest','arm','thigh','steps','recoveryMeasure','painMeasure','photoNote','energy','fatigue','measureNotes'];
  const entry={date:new Date().toLocaleDateString('it-IT'), week:S.week, phase:currentWeek().phase};
  fields.forEach(f=>entry[f]=$('#'+f)?.value||'');
  S.measures.unshift(entry); save(); renderProgress();
}

function renderGuide(){
  $('#guide').innerHTML=`
  <div class="card"><h2>Come usare il programma senza esagerare</h2>
    <ul class="reason-list">
      <li>Meglio tecnica pulita che completare reps sporche.</li>
      <li>Se non arrivi al range previsto, scala l’esercizio.</li>
      <li>Se fai solo 3 reps quando il target è 8–12, usa bande, regressioni o resta in Foundation.</li>
      <li>Non aumentare tutto insieme: volume, intensità, cardio e difficoltà.</li>
      <li>Se dolore o fatica sono alti, riduci HIIT e usa più camminata/steady state.</li>
      <li>Puoi estendere Foundation: non è un fallimento, è progressione intelligente.</li>
      <li>Meglio completare il programma all’80–90% con costanza che farlo al 120% e fermarsi.</li>
    </ul>
  </div>
  <div class="card"><h3>Regole automatiche</h3><p class="sub"><strong>70–100%</strong> delle reps: continua. <strong>40–70%</strong>: scaling. <strong>&lt;40%</strong>: regressione più facile e valuta Foundation estesa. <strong>Dolore</strong>: stop, regressione o recupero.</p></div>
  <div class="card"><h3>Recuperi adattivi</h3><ul class="reason-list"><li>Forza/skill: 120–180 sec</li><li>Ipertrofia: 60–90 sec</li><li>Circuito/conditioning: 15–45 sec</li><li>Core: 30–60 sec</li><li>Se le reps calano molto tra le serie, aumenta recupero o usa regressione.</li></ul></div>
  <div class="card"><h3>Superserie e circuiti</h3>${groupingGuideHtml()}</div>`;
}

function renderSettingsScreen(){
  ensureAdaptiveState();
  $('#settings').innerHTML=`<div class="card"><h2>Impostazioni</h2><p class="sub">Percorso predefinito: <strong>Fit and Lean</strong>. Ora il programma può superare 12 settimane se estendi Foundation.</p><label>Percorso<select id="settingsPathwaySelect"><option value="fit" ${S.pathway==='fit'?'selected':''}>Fit and Lean</option><option value="built" ${S.pathway==='built'?'selected':''}>Strong and Built</option></select></label><label>Settimana corrente<input id="settingsWeekInput" type="number" min="1" max="${totalWeeks()}" value="${S.week}"></label><div class="grid"><div class="stat"><small>Totale settimane</small><b>${totalWeeks()}</b></div><div class="stat"><small>Foundation extra</small><b>${S.foundationExtensionWeeks||0}</b></div></div><div class="row gap wrap"><button class="primary" onclick="saveSettingsScreen()">Salva impostazioni</button><button onclick="extendFoundation(1)">Foundation +1</button><button onclick="extendFoundation(2)">Foundation +2</button><button onclick="extendFoundation(4)">Foundation +4</button><button onclick="clearFoundationExtension()">Reset estensioni</button><button class="danger" onclick="resetAllData()">Reset app</button></div></div><div class="card"><h3>Versione</h3><p class="sub">Coach Tascabile Calisthenics v2.4.6 · smartphone · menu adattivo · switch Fit & Lean / Strong & Built · image-style fix legacy cards + Strict Underhand rigenerato + Planner Progression/Ultimate specifico.</p></div>`;
}

function saveSettingsScreen(){
  S.pathway=$('#settingsPathwaySelect').value;
  S.week=Math.max(1,Math.min(totalWeeks(),+$('#settingsWeekInput').value||1));
  save(); renderAll(); showTab('dashboard');
}

function clearFoundationExtension(){ S.foundationExtensionWeeks=0; S.week=Math.min(S.week,totalWeeks()); save(); renderAll(); }

function historyHtml(){
  const measures=S.measures.slice(0,5).map(m=>`<div class="exercise"><h4>${m.date} · W${m.week||'-'}</h4><p class="sub">Peso ${m.bw||'-'} kg · Vita ${m.waist||'-'} cm · Recupero ${m.recoveryMeasure||'-'}/10 · Fatica ${m.fatigue||'-'}/10 · Dolore ${m.painMeasure||'-'}</p></div>`).join('')||'<p class="sub">Nessun dato ancora.</p>';
  const tests=S.tests.slice(0,3).map(t=>`<div class="exercise"><h4>Test ${t.date} · W${t.week||'-'}</h4><p class="sub">${Object.entries(t.values).filter(([k,v])=>v).map(([k,v])=>`${k}: ${v}`).join(' · ')||'—'}</p></div>`).join('');
  const checkins=(S.weeklyCheckins||[]).slice(0,3).map(c=>`<div class="exercise"><h4>Check-in ${c.savedDate} · W${c.weekNumber}</h4><p>${badgeHtml(c.recommendation)}</p><p class="sub">${c.recommendation.action}</p></div>`).join('');
  const wos=(S.completedWorkouts||[]).slice(0,5).map(w=>`<div class="exercise"><h4>${w.date} · ${w.workout}</h4><p class="sub">Settimana ${w.week} · ${w.pathway==='built'?'Strong and Built':'Fit and Lean'}</p></div>`).join('');
  return checkins+wos+measures+tests;
}
