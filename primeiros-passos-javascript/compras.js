const valorProduto = 100;
const tipoPagamento = 'parcelado';
const quantidadeParcelas = 10;

if (tipoPagamento === 'dinheiro' || tipoPagamento === 'pix') {
    var valorTotal = valorProduto - (valorProduto * 0.15);
    console.log(valorTotal);
} else if (tipoPagamento === 'debito') {
    var valorTotal = valorProduto - (valorProduto * 0.10);
    console.log(valorTotal);
} else if (tipoPagamento === 'parcelado' && quantidadeParcelas <= 2) {
    console.log(valorProduto);
} else if (tipoPagamento === 'parcelado' && quantidadeParcelas > 2) {
    var valorTotal = valorProduto + (valorProduto * 0.10);
    console.log(valorTotal);
} else {
    console.log('Tipo de Pagamento inválido');
}