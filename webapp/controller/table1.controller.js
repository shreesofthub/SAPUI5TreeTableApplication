sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("treetable.controller.table1", {
            onInit: function () {
                this.table = this.byId("idTable1")
            },
            onColAll: function () {
                this.table.collapseAll();
            },
            onExpFL: function () {
                this.table.expandToLevel(1);
            },
            onExpSel: function () {
                var selectedIndex = this.table.getSelectedIndices();
                if (selectedIndex.length >= 1) {
                    this.table.expand(selectedIndex);
                } else {
                    new sap.m.MessageToast.show("select atleast one record");
                }
            },
            onColSel:function(){
                var selectedIndex = this.table.getSelectedIndices();
                this.table.collapse(selectedIndex);
            }
        });
    }
)