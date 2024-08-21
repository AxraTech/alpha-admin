// 'use client'

// // React Imports
// import { useState } from 'react'

// // MUI Imports
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'
// import TextField from '@mui/material/TextField'

// // Component Imports
// import CustomIconButton from '@core/components/mui/IconButton'
// import { useSuspenseQuery } from '@apollo/client'
// import { NEWS_CATS, PRODUCT_SELECT } from '@/graphql/queries'
// import {
//   Checkbox,
//   CheckBoxIcon,
//   CheckBoxOutlineBlankIcon,
//   FormHelperText,
//   ListItemText,
//   OutlinedInput
// } from '@mui/material'
// import Autocomplete from '@mui/material/Autocomplete'

// const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
// const checkedIcon = <CheckBoxIcon fontSize='small' />
// const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors }) => {
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         width: 250,
//         maxHeight: '80vh'
//       }
//     }
//   }

//   const { data: cats } = useSuspenseQuery(NEWS_CATS)
//   const { data: products } = useSuspenseQuery(PRODUCT_SELECT)

//   const handleChangesMuscleType = event => {
//     const {
//       target: { value }
//     } = event

//     // setSubType(typeof value === "string" ? value.split(",") : value);
//     setProductId(prevSubType => {
//       const newValue = typeof value === 'string' ? value.split(',') : value
//       return newValue
//     })
//   }

//   const getSubtypeNameById = uuid => {
//     const subtype = products?.products.find(subtype => subtype.id === uuid)
//     return subtype ? subtype.title : ''
//   }
//   return (
//     <Card>
//       <CardHeader title='Organize' />
//       <CardContent>
//         <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
//           {/* <FormControl fullWidth>
//             <InputLabel>Select Product Brand</InputLabel>
//             <Select
//               label='Select Vendor'
//               value={brandId}
//               onChange={e => setBrandId(e.target.value)}
//               error={errors?.brandId ? true : false}
//               helperText={errors?.brandId}
//             >
//               {brands?.brands?.map((brand, index) => (
//                 <MenuItem value={brand?.id} key={index}>
//                   {brand?.title}
//                 </MenuItem>
//               ))}
//             </Select>
//             <FormHelperText sx={{ color: 'red' }}>{errors?.brandId}</FormHelperText>
//           </FormControl> */}
//           <div className='flex items-center gap-4'>
//             <FormControl fullWidth>
//               <InputLabel>Select News Category</InputLabel>
//               <Select
//                 label='Select Category'
//                 value={catId}
//                 onChange={e => setCatId(e.target.value)}
//                 error={errors?.catId ? true : false}
//               >
//                 {cats?.news_categories?.map((cat, index) => (
//                   <MenuItem value={cat?.id} key={index}>
//                     {cat?.title}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText sx={{ color: 'red' }}>{errors?.catId}</FormHelperText>
//             </FormControl>
//             {/* <CustomIconButton size='large' variant='outlined' color='primary' className='min-is-fit'>
//               <i className='ri-add-line' />
//             </CustomIconButton> */}
//           </div>

//           {/* productId */}
//           <Autocomplete
//             multiple
//             id='checkboxes-tags-demo'
//             options={products?.products}
//             disableCloseOnSelect
//             getOptionLabel={productId => productId.title}
//             renderOption={(props, option, { selected }) => {
//               const { key, ...optionProps } = props
//               return (
//                 <li key={key} {...optionProps}>
//                   <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
//                   {option.title}
//                 </li>
//               )
//             }}
//             style={{ width: 500 }}
//             renderInput={params => <TextField {...params} label='Products' placeholder='Favorites' />}
//           />
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

// export default NewsOrganize

'use client'

import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Autocomplete from '@mui/material/Autocomplete'
import FormHelperText from '@mui/material/FormHelperText'

import { CustomIconButton } from '@core/components/mui/IconButton'
import { useSuspenseQuery } from '@apollo/client'
import { NEWS_CATS, PRODUCT_SELECT } from '@/graphql/queries'

const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors }) => {
  const { data: cats } = useSuspenseQuery(NEWS_CATS)
  const { data: products } = useSuspenseQuery(PRODUCT_SELECT)

  return (
    <Card>
      <CardHeader title='Organize' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          {/* <div className='flex items-center gap-4'> */}
          <FormControl fullWidth>
            <InputLabel>Select News Category</InputLabel>
            <Select
              label='Select Category'
              value={catId}
              onChange={e => setCatId(e.target.value)}
              error={errors?.catId}
            >
              {cats?.news_categories?.map((cat, index) => (
                <MenuItem value={cat?.id} key={index}>
                  {cat?.title}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: 'red' }}>{errors?.catId}</FormHelperText>
          </FormControl>

          <Autocomplete
            multiple
            value={productId}
            onChange={(event, newValue) => {
              setProductId(newValue)
            }}
            // inputValue={inputValue}
            // onInputChange={(event, newInputValue) => {
            //   setInputValue(newInputValue)
            // }}
            className='overflow-y-auto h-[40vh]'
            id='checkboxes-tags-demo'
            options={products?.products || []}
            disableCloseOnSelect
            getOptionLabel={options => options?.title || ''}
            renderOption={(props, option, { selected }) => (
              <li {...props} key={option.id}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.title}
              </li>
            )}
            renderInput={params => <TextField {...params} label='Products' placeholder='select products' />}
          />

          {/* </div> */}
        </form>
      </CardContent>
    </Card>
  )
}

export default NewsOrganize
