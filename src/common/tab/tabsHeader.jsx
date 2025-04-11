import React from "react";
import TabHeader from "./tabHeader"; // ajuste o path conforme necessário

export default function TabsHeader() {
    return (
        <ul className="nav nav-tabs">
            <TabHeader label='Listar' icon='bars' target='tabList' />
            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
        </ul>
    );
}
