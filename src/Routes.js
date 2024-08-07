import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetCareCenterTiles, 
PetCareCenterInfoForm, 
PetServiceList, 
PetServiceInfoForm, 
PetServiceCreate, PetServiceEdit, PetServiceView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />
                                            <Route path="PetServices/view/:id" element={<PetServiceView {...props} title={'View PetService'} />} />
                        <Route path="PetServices/edit/:id" element={<PetServiceEdit {...props} title={'Edit PetService'} />} />
                        <Route path="PetServices/create" element={<PetServiceCreate {...props} title={'Create PetService'} />} />

                <Route path="/list" element={<PetServiceList {...props} title={'List'} />} />
                <Route path="/listinfoform" element={<PetServiceInfoForm {...props} title={'List info '} />} />
                <Route path="/tiles" element={<PetCareCenterTiles {...props} title={'Tiles'} />} />
                <Route path="/tilesinfoform" element={<PetCareCenterInfoForm {...props} title={'tiles info'} />} />
        </Routes>
    )

};

export default Component;