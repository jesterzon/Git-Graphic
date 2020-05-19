// On instancie le graph dans le conteneur.
var sprint3 = creerGitGraph("graph-container-3");

// Branche MASTER
var master = creerBrancheMaster(sprint3);

//provisoir (integration_app_20_2 issue d'integration_app_20)
var integration0 = master.branch("integration_app_20");
integration0.commit("start");
var integration = integration0.branch("integration_app_20_2");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");
var tache1 = creerBrancheDeTache(fonctionnalite1, "235-evol-popin-sensibilisation-relance-notification-os");
var tache2 = creerBrancheDeTache(fonctionnalite1, "242-evol-notif-20-2-raf-...-verrouillage-tel");
var tache3 = creerBrancheDeTache(fonctionnalite1, "257-q4q-3165-evol-notification-app-evolution-de-la-pop-in-de-sensibilisation-et-relance-actuelle");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache5 = creerBrancheDeTache(fonctionnalite2, "2235_mise_a_jour_centre_notifications");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");

// MERGES --------------------
fonctionnalite1.merge(tache1);

// FUSION aprés DEMO
