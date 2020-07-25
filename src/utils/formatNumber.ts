const formatNumber: any = (num: number) => (num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
export default formatNumber