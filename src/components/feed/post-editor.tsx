'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface PostEditorProps {
  content?: string;
  onChange?: (json: object) => void;
  placeholder?: string;
}

export function PostEditor({ content, onChange, placeholder }: PostEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content ? JSON.parse(content) : '',
    immediatelyRender: false, // CRITICAL: Prevents SSR hydration errors
    onUpdate: ({ editor }) => {
      onChange?.(editor.getJSON());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg p-4">
      {/* Toolbar */}
      <div className="flex gap-2 mb-3 pb-3 border-b">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 text-sm font-bold text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors ${editor.isActive('bold') ? 'bg-gray-100 border-gray-400' : ''
            }`}
          aria-label="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 text-sm italic text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors ${editor.isActive('italic') ? 'bg-gray-100 border-gray-400' : ''
            }`}
          aria-label="Italic"
        >
          I
        </button>
      </div>

      {/* Editor content */}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none min-h-[100px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[100px] [&_.ProseMirror:focus]:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
