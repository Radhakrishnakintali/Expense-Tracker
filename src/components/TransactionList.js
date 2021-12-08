import React from 'react';
// import * as actions from '../redux/actions/accounts';
// import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Transaction } from './Transaction';
import { MysteriousSankey } from './MysteriousSankey';

//const data = {"nodes": [ { "name" : "Universidad de Granada" }, { "name" : "De Comunidades Autónomas" }, { "name" : "Precios públicos" }, { "name" : "De la Administración General del Estado" }, { "name" : "Ingresos por prestación de servicios" }, { "name" : "Del exterior" }, { "name" : "De la Seguridad Social" }, { "name" : "Tasas" }, { "name" : "De empresas privadas" }, { "name" : "De Organismos Autónomos Administrativos" }, { "name" : "Reintegro de préstamos concedidos" }, { "name" : "Rentas de bienes inmuebles" }, { "name" : "Intereses de depósitos" }, { "name" : "Otros ingresos patrimoniales" }, { "name" : "De empresas públicas y otros entes públicos" }, { "name" : "Venta de bienes" }, { "name" : "De familias e instituciones sin fines de lucro" }, { "name" : "De Corporaciones Locales" }, { "name" : "Otros Ingresos" }, { "name" : "Enseñanzas Universitarias" }, { "name" : "Estructura y Gestión Universitaria" }, { "name" : "Investigación Científica" }, { "name" : "Gastos De Personal" }, { "name" : "Inversiones Reales" }, { "name" : "Gastos En Bienes Corrientes Y Servicios" }, { "name" : "Transferencias Corrientes" }, { "name" : "Activos Financieros" }, { "name" : "Pasivos Financieros" }, { "name" : "Transferencias De Capital" }, { "name" : "Gastos Financieros" } ] , "links": [ { "source" : 19, "target" : 26, "value" : 1150000 }, { "source" : 0, "target" : 19, "value" : 283175993 }, { "source" : 0, "target" : 20, "value" : 64294001 }, { "source" : 19, "target" : 22, "value" : 252728897 }, { "source" : 20, "target" : 22, "value" : 54659 }, { "source" : 21, "target" : 24, "value" : 805940 }, { "source" : 19, "target" : 24, "value" : 11754596 }, { "source" : 20, "target" : 24, "value" : 25439249 }, { "source" : 20, "target" : 29, "value" : 2e+05 }, { "source" : 21, "target" : 23, "value" : 47161673 }, { "source" : 20, "target" : 23, "value" : 36754122 }, { "source" : 19, "target" : 23, "value" : 2485000 }, { "source" : 0, "target" : 21, "value" : 47967613 }, { "source" : 20, "target" : 27, "value" : 1127217 }, { "source" : 19, "target" : 25, "value" : 14807500 }, { "source" : 20, "target" : 25, "value" : 581754 }, { "source" : 20, "target" : 28, "value" : 137000 }, { "source" : 19, "target" : 28, "value" : 250000 }, { "source" : 1, "target" : 0, "value" : 259498608 }, { "source" : 1, "target" : 0, "value" : 30465000 }, { "source" : 17, "target" : 0, "value" : 90000 }, { "source" : 17, "target" : 0, "value" : 30000 }, { "source" : 8, "target" : 0, "value" : 1400000 }, { "source" : 8, "target" : 0, "value" : 1275000 }, { "source" : 14, "target" : 0, "value" : 4e+05 }, { "source" : 16, "target" : 0, "value" : 2e+05 }, { "source" : 3, "target" : 0, "value" : 22245000 }, { "source" : 3, "target" : 0, "value" : 10600000 }, { "source" : 6, "target" : 0, "value" : 3e+06 }, { "source" : 5, "target" : 0, "value" : 4e+06 }, { "source" : 5, "target" : 0, "value" : 3500000 }, { "source" : 9, "target" : 0, "value" : 693000 }, { "source" : 9, "target" : 0, "value" : 70000 }, { "source" : 4, "target" : 0, "value" : 8850000 }, { "source" : 12, "target" : 0, "value" : 5e+05 }, { "source" : 2, "target" : 0, "value" : 44740000 }, { "source" : 10, "target" : 0, "value" : 650000 }, { "source" : 18, "target" : 0, "value" : 75000 }, { "source" : 13, "target" : 0, "value" : 406000 }, { "source" : 11, "target" : 0, "value" : 6e+05 }, { "source" : 7, "target" : 0, "value" : 1900000 }, { "source" : 15, "target" : 0, "value" : 250000 } ] };
const data1 = {
	"nodes": [{
		"name": "salary"
	}, {
		"name": "interest"
	}, {
		"name": "budget"
	}, {
		"name": "Electricity bill"
	}, {
		"name": "phone bill"
	}, {
		"name": "rent"
	}],
	"links": [{
		"source": 0,
		"target": 2,
		"value": 5000
	}, {
		"source": 1,
		"target": 2,
		"value": 3000
	}, {
		"source": 2,
		"target": 3,
		"value": 3000
	}, {
		"source": 2,
		"target": 4,
		"value": 2000
	}, {
		"source": 2,
		"target": 5,
		"value": 1000
	}]
}

export const TransactionList = () => {
    const {accounts} = useSelector((accounts) => accounts);
    const { t } = useTranslation();
    //console.log("text :" +accounts.transactions);
    //const dispatch = useDispatch();
    //const { deleteTransaction } = bindActionCreators(actions, dispatch);
    //console.log(accounts.transactions);
    //let nodes = [{"name": "Budget"}]
    let count = 0;
    let nodes = accounts.transactions
            .map( transaction => 
                {
                    count ++;
                    return { "name": transaction.text };
                }
            )
    //nodes.splice(0, 0, {"name": "Budget"});

    //const linksBudget = [{"source:"}]
    let links = accounts.transactions
            .map ((transaction, index) =>{
                count = count + 1
                if (transaction.amount < 0) 
                    return {
                        "source": 0,
                        "target": index + 1,
                        "value": Math.abs(transaction.amount)
                    }
                    return {
                        "source": index + 1,
                        "target": 0,
                        "value": transaction.amount
                    }
                }
            )
    nodes.splice(0, 0, {"name": "Budget"});
    const data = {
        "nodes": nodes,
        "links": links
    }


console.log(data);
    return (
        <div data-testid='transactionListData'>
            <div width="100%" >
                <div className="font-weight-normal mb-2" style={{paddingTop:"20px"}}>{t("financial_flow_chart")}</div>
                <svg style={{margin:"auto", display:"block"}} width="600px" height="600px">
                    {data && <MysteriousSankey data={data} width="600" height="600" />}
                </svg>
            </div>
            <h3>{t("history")}</h3>
            <ul id="list" className="list">
                {accounts.transactions.map((transaction,index) => (
                    <Transaction id={`transaction${index}`} key={transaction.id} transaction = {transaction} transactions={accounts.transactions} />
                ))}
            </ul>
        </div>
    )
}