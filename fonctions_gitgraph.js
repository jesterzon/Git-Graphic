// Fonctions pour faciliter l'integration du plugin gitGraph

//---------- couleurs ----------
var rouge = "#db1f12";
var bleu = "#2469c9";
var vert = "green";
//------------------------------

function creerGitGraph(container) {
    var graphContainer = document.getElementById(container);
    var gitgraph = GitgraphJS.createGitgraph(graphContainer, {
        orientation: 'horizontal',
        template: GitgraphJS.templateExtend("blackarrow", {
            colors: ["black"],
            branch: {
                spacing: 60,
                lineWidth: 3,
                label: {
                    font: "12pt sans-serif"
                }
            },
            commit: {
                dot: {
                    size: 6,
                    strokeWidth: 2,
                    color: "white"
                }
            },
            arrow: {
                size: 0
            }
        })
    });
    return gitgraph;
}

function creerBrancheMaster(sprint) {
    var master = sprint.branch({
        name: "[Q4Q] master",
        style: {
            color: ""
        }
    });
    master.commit("start");
    return master;
}

function creerBrancheIntegration(nom) {
    var integration = master.branch({
        name: nom,
        style: {
            color: "",
            label: {
                color: "",
                strokeColor: ""
            }
        }
    });
    integration.commit("start");
    return integration;
}

function creerBrancheDeFonctionnalite(nom) {
    var fonctionnalite = integration.branch({
        name: nom,
        style: {
            color: rouge,
            label: {
                color: rouge,
                strokeColor: rouge
            }
        }
    });
    creerCommitFonctionnalite(fonctionnalite, "start");
    return fonctionnalite;
}

function creerBrancheDeTache(fonctionnalite, nom) {
    var tache =  fonctionnalite.branch({
        name: nom,
        style: {
            color: bleu,
            label: {
                color: bleu,
                strokeColor: bleu
            }
        }
    });
    creerCommitTache(tache, "start");
    return tache;
}

function creerBrancheDeMerge(fonctionnalite, nom) {
    var brancheDeMerge =  fonctionnalite.branch({
        name: nom
    });
    brancheDeMerge.commit("start");
    return brancheDeMerge;
}

function creerMerge(branche1, branche2) {
    branche2.commit("merge");
    branche1.merge(branche2);
}

function creerBrancheDeSprint(nom) {
    var sprint =  integration.branch({
        name: nom,
        style: {
            color: vert,
            label: {
                color: vert,
                strokeColor: vert
            }
        }
    });
    creerCommitSprint(sprint, "start");
    return sprint;
}

function creerBrancheDeSpikes(nom) {
    var spikes =  integration.branch({
        name: nom,
        style: {
            color: vert,
            label: {
                color: vert,
                strokeColor: vert
            }
        }
    });
    creerCommitSprint(spikes, "start");
    return spikes;
}

function creerCommitFonctionnalite(fonctionnalite, nom) {
    fonctionnalite.commit({
        subject: nom,
        style: {
            dot: {
                color: rouge
            }
        }
    });
}

function creerCommitTache(tache, nom) {
    tache.commit({
        subject: nom,
        style: {
            dot: {
                color: bleu
            }
        }
    });
}

function creerCommitSprint(sprint, nom) {
    sprint.commit({
        subject: nom,
        style: {
            dot: {
                color: vert
            }
        }
    });
}