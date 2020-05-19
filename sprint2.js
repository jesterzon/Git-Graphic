// On instancie le graph dans le conteneur.
var sprint2 = creerGitGraph("graph-container-2");

// Branche MASTER
var master = creerBrancheMaster(sprint2);

//provisoir
var integration0 = master.branch("integration_app_20");
integration0.commit("start");
var integration = integration0.branch("integration_app_20_2");
integration.commit("start");

// Branche INTEGRATION
//var integration = creerBrancheIntegration("integration_app_20_2");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");
var tache1 = creerBrancheDeTache(fonctionnalite1, "228-refonte-moteur-sensi-relance");
var tache2 = creerBrancheDeTache(tache1, "235-evol-popin-sensibilisation-relance-notification-os");
var tache3 = creerBrancheDeTache(fonctionnalite1, "242-evol-notif-20-2-raf-...-verrouillage-tel");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_2567_poc_notification");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_integration_code_media_transmis_a_q44");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache4 = creerBrancheDeTache(fonctionnalite4, "Ano Maxime Q4Q-3173 (local)");
var tache5 = creerBrancheDeTache(fonctionnalite4, "2235_mise_a_jour_centre_notifications");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");

// MERGES --------------------
fonctionnalite4.merge(tache4);
brancheSprint.merge(fonctionnalite4);
fonctionnalite4.merge(tache5);
brancheSprint.merge(tache1);
fonctionnalite1.merge(tache2);
tache3.merge(tache2);
brancheSprint.merge(fonctionnalite1);
fonctionnalite1.merge(tache3);
var merge_sensi = creerBrancheDeMerge(fonctionnalite1, "merge_sensi_notif");
creerMerge(merge_sensi, fonctionnalite4);
brancheSprint.merge(merge_sensi);

// FUSION aprés DEMO
creerMerge(integration, tache4);
