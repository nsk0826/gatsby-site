exports.onCreateNode = ({ node }) => {
    if (node.internal.type === `MarkdownRemark`){
        console.log(node)
    }
}