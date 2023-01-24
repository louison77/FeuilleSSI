import React from 'react';
import { useState } from "react";
import "../../styles/components/AccueilStyles/_tableP.css";

const TableP = () => {
    const [projets, setprojets] = useState([
        { Nom: "Acme", Id: 298 - 52, StatutAudit: "Terminé", StatutPA: "Terminé" },
        {
          Nom: "Orange",
          Id: 278 - 40, 
          StatutAudit: "Terminé",
          StatutPA: "En cours",
        },
      ]);
      const [newProjet, setNewProjet] = useState("");
      const [newID, setNewID] = useState("");
    
      //comportements
    
      //comportement/evenenement lors de la soumission du formulaire
      const handleSubmit = (event) => {
        //pour ne pas que la page se réactualise quand on appuie sur le bouton
        event.preventDefault();
        if (newProjet !== "" && newID !== "") {
          //copie du state
          const ProjetCopy = [...projets];
          //manipulation copie du state, on génère un id aléatoire
          const id = newID;
          const nom = newProjet;
          const StatutAudit = "Pas démarré";
          const StatutPA = "Pas démarré";
          ProjetCopy.push({
            Nom: nom,
            Id: id,
            StatutAudit: StatutAudit,
            StatutPA: StatutPA,
          });
          //modifier state setter
          setprojets(ProjetCopy);
          setNewProjet("");
          setNewID("");
        }
      };
      const handleChange = (event) => {
        setNewProjet(event.target.value);
      };
      const ChangeID = (event) => {
        setNewID(event.target.value);
      };
    return (
        <div>
            <div className="boutons">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            value={newProjet}
            type="text"
            placeholder="Ajouter un projet"
            onChange={handleChange}
          />
          <input
            value={newID}
            type="text"
            placeholder="Ajouter l'ID"
            onChange={ChangeID}
          />

          <button className="Button1">Nouveau projet</button>
        </form>

        <button className="Button2">Nouveau CdP</button>
      </div>
      <table className="TableProjects">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Id</th>
            <th>Statut Audit</th>
            <th>Statut PA</th>
          </tr>
        </thead>

        <tbody>
          {projets.map((project) => (
            <tr>
              
                <button className="ButtonProjectName">
                  <td>{project.Nom}</td>
                </button>
             
              <td>{project.Id}</td>
              <td>{project.StatutAudit}</td>
              <td>{project.StatutPA}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default TableP;