'use client'

// MUI Imports
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import ReactHtmlParser from 'react-html-parser'

// Style Imports
import '@/libs/styles/tiptapEditor.css'
import { setNonce } from 'react-colorful'
import { useEffect } from 'react'

const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5'>
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className={classnames('ri-bold', { 'text-textSecondary': !editor.isActive('bold') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className={classnames('ri-underline', { 'text-textSecondary': !editor.isActive('underline') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className={classnames('ri-italic', { 'text-textSecondary': !editor.isActive('italic') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className={classnames('ri-strikethrough', { 'text-textSecondary': !editor.isActive('strike') })} />
      </CustomIconButton>

      {/* Bullet List Button */}
      <CustomIconButton
        {...(editor.isActive('bulletList') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <i className={classnames('ri-list-unordered', { 'text-textSecondary': !editor.isActive('bulletList') })} />
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className={classnames('ri-align-left', { 'text-textSecondary': !editor.isActive({ textAlign: 'left' }) })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i
          className={classnames('ri-align-center', {
            'text-textSecondary': !editor.isActive({ textAlign: 'center' })
          })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i
          className={classnames('ri-align-right', {
            'text-textSecondary': !editor.isActive({ textAlign: 'right' })
          })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i
          className={classnames('ri-align-justify', {
            'text-textSecondary': !editor.isActive({ textAlign: 'justify' })
          })}
        />
      </CustomIconButton>
    </div>
  )
}

const ProductInformation = ({
  setTitle,
  title,
  setSNo,
  sNo,
  setDescription,
  description,
  errors,
  productData
  // warrantyPeriod,
  // setWarrantyPeriod
}) => {
  // const htmlDescription = ReactHtmlParser(productData.description_html)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something here...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],
    content: description,
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML())
    }
  })

  useEffect(() => {
    if (productData) {
      setTitle(productData?.title)
      setSNo(productData?.serial_number)

      setDescription(productData?.description_html)
    }
  }, [productData])
  useEffect(() => {
    if (editor && description !== editor.getHTML()) {
      editor.commands.setContent(description || '')
    }
  }, [description, editor])

  return (
    <Card>
      <CardHeader title='Product Information' />
      <CardContent>
        <Grid container spacing={5} className='mbe-5'>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Product Name'
              placeholder='Enter Product Name'
              value={title}
              onChange={e => setTitle(e.target.value)}
              error={errors?.title ? true : false}
              helperText={errors?.title}
            />
          </Grid>
          {/* warranty_period */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Warranty Period'
              placeholder='0123-4567'
              value={warrantyPeriod}
              onChange={e => setWarrantyPeriod(e.target.value)}
              error={errors?.warrantyPeriod ? true : false}
              helperText={errors?.warrantyPeriod}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Serial Number'
              placeholder='0123-4567'
              value={sNo}
              onChange={e => setSNo(e.target.value)}
              error={errors?.sNo ? true : false}
              helperText={errors?.sNo}
            />
          </Grid>
        </Grid>
        <Typography className='mbe-1'>Description (Optional)</Typography>
        <Card className='p-0 border shadow-none'>
          <CardContent className='p-0'>
            <EditorToolbar editor={editor} />
            <Divider className='mli-5' />
            <EditorContent editor={editor} className='bs-[135px] overflow-y-auto flex ' />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default ProductInformation
