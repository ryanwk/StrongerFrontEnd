// 'use strict'
//
// const frontPage = function () {
//
// }
// const signInView = function () {
//
// }
// const signOutView = function () {
//
// }
//
// module.exports = {
//   frontPage,
//   signInView,
//   signOutView
// }
//
// const onDeleteSuccess = function (data) {
//   $('#content').empty()
//   const onShowSuccess = function (data) {
//     $('#content').empty()
//     const onUpdateSuccess = function (data) {
//       $('#content').empty()
//         $('#content').empty()
//         const onIndexSuccess = function (data) {
//           $('#content').empty()
//
//
//
//
//
//           const deleteCol = function () {
//             const collectionId = $(this).parent().attr('data-collection-id')
//             collectionApi.destroy(collectionId)
//               .then(collectionUi.onDeleteSuccess)
//               .catch(collectionUi.onDeleteError)
//           }
//
//           const showCol = function () {
//             const collectionId = $(this).parent().attr('data-collection-id')
//             collectionApi.show(collectionId)
//               .then(collectionUi.onShowSuccess)
//               .catch(collectionUi.onShowError)
//           }
//
//           const openEditColModal = function () {
//             const collectionId = $(this).parent().attr('data-collection-id')
//             const colName = $(this).parent().attr('data-collection-name')
//             const colDes = $(this).parent().attr('data-collection-description')
//             $('#editColModal').modal('show')
//             $('#editColId').text(collectionId)
//             $('#editColName').val(colName)
//             $('#editColDes').val(colDes)
//           }
//
//           const editCol = function (event) {
//             event.preventDefault()
//             const collectionId = $('#editColId').text()
//             const data = getFormFields(event.target)
//             collectionApi.update(data, collectionId)
//               .then(collectionUi.onUpdateSuccess)
//               .catch(collectionUi.onUpdateError)
//           }
//
//           const allCol = function () {
//             collectionApi.index()
//               .then(collectionUi.onIndexSuccess)
//               .catch(collectionUi.onIndexError)
//           }
//
//           const addHandlers = () => {
//             $('#createCollectionForm').on('submit', addCollection)
//             $('#allColBtn').on('click', allCol)
//           }
