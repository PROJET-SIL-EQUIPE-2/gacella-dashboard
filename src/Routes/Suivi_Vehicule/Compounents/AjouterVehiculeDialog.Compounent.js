import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { fetchAddVehicule, fetchgetAMS } from "../../../redux/actions/actions";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function AjouterVehiculeDialog({ isOpen, setOpen }) {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.amsProfiles);
  const [responsable, setResponsable] = useState("");
  const [ajouterVehiculeForm, setAjouterVehiculeForm] = useState({
    price_per_hour: 0.0,
    mileage: 0.0,
    matricule: null,
    type: "classic",
  });

  useEffect(() => {
    dispatch(fetchgetAMS());
  }, []);

  const submitVehicule = () => {
    dispatch(fetchAddVehicule(ajouterVehiculeForm, responsable)).then(() => {
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(ajouterVehiculeForm);

  return (
    <div>
      <Dialog className="p-2" fullwidth open={isOpen} onClose={handleClose}>
        <DialogTitle
          style={{ fontSize: "2rem" }}
          className="lora-700 gacela-orange"
        >
          Nouveau véhicule
        </DialogTitle>
        <DialogContent
          style={{ marginTop: "1rem" }}
          className="h-100 d-flex flex-column"
        >
          <PerfectScrollbar
            component="div"
            style={{
              placeContent: "space-between",
              height: "calc(100vh - 10px)",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormGroup>
                  <Label className="roboto-700" for="matricule">
                    Matricule
                  </Label>
                  <Input
                    onChange={(e) => {
                      setAjouterVehiculeForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="text"
                    name="matricule"
                    className="signUpInput"
                    id="matricule"
                    placeholder="matricule"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="roboto-700" for="type">
                    Type
                  </Label>
                  <Input
                    onChange={(e) => {
                      setAjouterVehiculeForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="text"
                    name="type"
                    className="signUpInput"
                    id="type"
                    placeholder="type"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="roboto-700" for="price_per_hour">
                    Prix de location (par heure)
                  </Label>
                  <Input
                    onChange={(e) => {
                      setAjouterVehiculeForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="number"
                    name="price_per_hour"
                    className="signUpInput"
                    id="price_per_hour"
                    placeholder="prix par heure"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="roboto-700" for="mileage">
                    Kilométrage intial
                  </Label>
                  <Input
                    onChange={(e) => {
                      setAjouterVehiculeForm((oldState) => {
                        return { ...oldState, [e.target.name]: e.target.value };
                      });
                    }}
                    type="number"
                    name="mileage"
                    className="signUpInput"
                    id="mileage"
                    placeholder="kilométrage initial"
                  />
                </FormGroup>

                <FormGroup className="d-flex flex-column">
                  <Label className="roboto-700" id="responsable">
                    Responsable
                  </Label>
                  <Select
                    name="responsable"
                    id="responsable"
                    className="signUpInput"
                    value={responsable}
                    autoWidth
                    displayEmpty
                    onChange={(e) => {
                      setResponsable(e.target.value);
                    }}
                  >
                    <MenuItem disabled value="">
                      <em>Affecter le véhicule à un agent de maintenance</em>
                    </MenuItem>
                    {agents?.data?.map((agent, index) => {
                      return (
                        <MenuItem index={agent.id} value={agent.email}>
                          {agent.name} {agent.family_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormGroup>
                <div className="w-100 mt-lg-3 mt-lg-3">
                  <Button
                    onClick={() => submitVehicule()}
                    style={{ color: "white" }}
                    disabled={
                      !(
                        ajouterVehiculeForm.matricule?.length &&
                        ajouterVehiculeForm.type?.length &&
                        responsable !== "" &&
                        ajouterVehiculeForm.price_per_hour?.length
                      )
                    }
                    id="signUpButton"
                    className="w-100"
                    variant="contained"
                  >
                    Ajouter le profile
                  </Button>
                </div>
              </Grid>
            </Grid>
          </PerfectScrollbar>
        </DialogContent>
      </Dialog>
    </div>
  );
}

//<div style={{marginTop : "1rem"}} className="h-100 d-flex flex-column">
