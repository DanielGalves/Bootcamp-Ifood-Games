function valorTotal(tipoPagamento,valorProduto,quantidadeParcelas){
    if (tipoPagamento === 'dinheiro' || tipoPagamento === 'pix') {
        return valorProduto - (valorProduto * 0.15);
        
    } else if (tipoPagamento === 'debito') {
        return valorProduto - (valorProduto * 0.10);
    } else if (tipoPagamento === 'parcelado' && quantidadeParcelas <= 2) {
        return valorProduto;
    } else if (tipoPagamento === 'parcelado' && quantidadeParcelas > 2) {
        return valorTotal = valorProduto + (valorProduto * 0.10);
        
    } else {
        return 'Tipo de Pagamento inválido';
    }

}

function main(){
    const valorProduto = 100;
    const tipoPagamento = 'parcelado';
    const quantidadeParcelas = 10;

    console.log(valorTotal(tipoPagamento,valorProduto,quantidadeParcelas));

}

main();