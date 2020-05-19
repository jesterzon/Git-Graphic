// On instancie le graph dans le conteneur.
var sprint1 = creerGitGraph("graph-container-1");

// Branche MASTER
var master = creerBrancheMaster(sprint1);

//provisoir (integration_app_20_2 issue d'integration_app_20)
var integration0 = master.branch("integration_app_20");
integration0.commit("start");
var integration = integration0.branch("integration_app_20_2");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_inbenta");
var tache1 = creerBrancheDeTache(fonctionnalite1, "2987_spike_inbenta");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache2 = creerBrancheDeTache(fonctionnalite2, "2531-rendre_notifications_certicode-plus_obligatoires");
var tache3 = creerBrancheDeTache(fonctionnalite2, "2532-spike-autorisation-notification-os");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_2567_poc_notification");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_maj_toolbox_v27");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s01");

// Branche SPIKES
var spikes = creerBrancheDeSpikes("spikes_twenty_r01_s01");

// MERGES --------------------
brancheSprint.merge(fonctionnalite5);
brancheSprint.merge(fonctionnalite4);
fonctionnalite2.merge(tache2);
brancheSprint.merge(fonctionnalite2);
spikes.merge(tache1);
spikes.merge(tache3);
spikes.merge(fonctionnalite3);

// FUSION aprés DEMO
creerMerge(integration, fonctionnalite2);
creerMerge(integration, fonctionnalite4);